import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// eslint-disable-next-line import/no-cycle
import { computeShortestPath } from "./shortestPath";
// eslint-disable-next-line import/no-cycle
import { SquareState, swapSquareState, swapSquareStateInGrid } from "./Square";

import { clamp, getPseudoRandomIdx, to1DIdx } from "./utils";

export const MAX_ROWS = 20; // could be up to ~ 250, but definitely no more than 255 (u16)
export const MAX_COLS = 20; // could be up to ~ 250, but definitely no more than 255 (u16)

export const MIN_ROWS = 1;
export const MIN_COLS = 1;

export type GridT = Uint8Array;
export type IndicesOfShortestPathT = Uint16Array;

const initGrid = (rows: number = 10, cols: number = 10, isInverted: boolean = false): GridT => {
	if (rows <= 1 && cols <= 1) {
		throw new Error("Cannot create a 1x1 or smaller grid");
	}

	const grid: GridT = new Uint8Array(rows * cols);

	const idx = to1DIdx(cols);

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			grid[idx(i, j)] = isInverted ? SquareState.Clear : SquareState.Filled;
		}
	}

	const startIdx: number = idx(getPseudoRandomIdx(rows), 0);
	let endIdx: number;
	/**
	 * in case there's only one column
	 */
	do {
		endIdx = idx(getPseudoRandomIdx(rows), cols - 1);
	} while (endIdx === startIdx);

	grid[startIdx] = SquareState.Start;
	grid[endIdx] = SquareState.End;

	return grid;
};

interface State {
	grid: GridT;

	rows: number;
	cols: number;

	dirtyRows: number;
	dirtyCols: number;

	hasShortestPath: boolean;
	indicesOfShortestPathSquares: IndicesOfShortestPathT;

	isInverted: boolean;
	hideUIStates: boolean;
}

const getDefaultState = (): State => ({
	grid: initGrid(), //
	rows: 10,
	cols: 10,
	dirtyRows: 10,
	dirtyCols: 10,
	hasShortestPath: false,
	indicesOfShortestPathSquares: new Uint16Array(),
	isInverted: false,
	hideUIStates: false,
});

const initialState: State = getDefaultState();

export const slice = createSlice({
	name: "grid",
	initialState,
	reducers: {
		reset: (): State => getDefaultState(),
		eventuallySetRows: (state, action: PayloadAction<number>): void => {
			state.dirtyRows = clamp(action.payload, MIN_ROWS, MAX_ROWS);
		},
		eventuallySetCols: (state, action): void => {
			state.dirtyCols = clamp(action.payload, MIN_COLS, MAX_COLS);
		},
		commitResize: (state): void => {
			if (state.dirtyRows <= 1 && state.dirtyCols <= 1) {
				state.dirtyRows = 2;
				state.dirtyCols = 2;
			}

			state.rows = state.dirtyRows;
			state.cols = state.dirtyCols;
			const newGrid: GridT = initGrid(state.dirtyRows, state.dirtyCols, state.isInverted);
			state.grid = newGrid;

			state.hasShortestPath = false;
			state.indicesOfShortestPathSquares = computeShortestPath(newGrid, state.dirtyRows, state.dirtyCols);
		},
		toggleUIStates: (state): void => {
			state.hideUIStates = !state.hideUIStates;
		},
		invert: {
			reducer: (
				state,
				action: PayloadAction<{
					grid: GridT;
					indicesOfShortestPathSquares: Uint16Array;
					hasShortestPath: boolean;
				}>
			): void => {
				state.isInverted = !state.isInverted;
				state.grid = action.payload.grid;
				state.indicesOfShortestPathSquares = action.payload.indicesOfShortestPathSquares;
				state.hasShortestPath = action.payload.hasShortestPath;
			},
			prepare: (grid: GridT, rows: number, cols: number) => {
				const newGrid: GridT = grid.map(swapSquareState);
				const indicesOfShortestPathSquares: Uint16Array = computeShortestPath(newGrid, rows, cols);

				return {
					payload: {
						grid: newGrid,
						indicesOfShortestPathSquares,
						hasShortestPath: indicesOfShortestPathSquares.length > 0,
					},
				};
			},
		},
		clickSquare: {
			reducer: (
				state,
				action: PayloadAction<{
					squareState: SquareState;
					grid: GridT;
					hasShortestPath: boolean;
					indicesOfShortestPathSquares: Uint16Array;
				}>
			): void => {
				const { grid, squareState, hasShortestPath, indicesOfShortestPathSquares } = action.payload;

				if ([SquareState.Start, SquareState.End].includes(squareState)) {
					return;
				}

				state.grid = grid;
				state.hasShortestPath = hasShortestPath;
				state.indicesOfShortestPathSquares = indicesOfShortestPathSquares;
			},
			prepare: (grid: GridT, rows: number, cols: number, squareIdx: number, squareState: SquareState) => {
				const newGrid: GridT = swapSquareStateInGrid(grid, squareIdx, squareState);
				const indicesOfShortestPathSquares: IndicesOfShortestPathT = computeShortestPath(newGrid, rows, cols);

				return {
					payload: {
						squareState,
						grid: newGrid,
						hasShortestPath: indicesOfShortestPathSquares.length > 0,
						indicesOfShortestPathSquares,
					},
				};
			},
		},
	},
});

export const {
	reset, //
	eventuallySetRows,
	eventuallySetCols,
	commitResize,
	invert,
	toggleUIStates,
	clickSquare,
} = slice.actions;

export default slice.reducer;
