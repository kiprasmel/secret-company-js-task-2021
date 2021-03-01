/* eslint-disable indent */
/* eslint-disable  */
import { css, cx } from "emotion";
import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { clickSquare, commitResize, eventuallySetCols, eventuallySetRows, GridT, to1DIdx, SquareState } from "./gridSlice";

export type ButtonProps = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({ children, ...rest }) => (
	<button
		type="button"
		{...rest}
		className={cx(
			css`
				font-size: 1.5em;
				padding: 0.4em 1em;

				border-radius: 8px;

				background-color: hsl(220, 100%, 60%);
				color: white;
			`,
			rest.className
		)}
	>
		{children}
	</button>
);

export const Label: FC<{ label: string }> = ({ label, children }) => (
	<div
		className={css`
			display: flex;
			flex-direction: column;

			align-items: flex-start;

			& > * + * {
				margin-top: 0.25em;
			}
		`}
	>
		<p
			className={css`
				margin: 0;
				padding: 0;

				font-size: 1.5em;
			`}
		>
			{label}
		</p>

		{children}
	</div>
);

export type RowProps = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const Row: FC<RowProps> = ({ children, ref, ...rest }) => (
	<div
		{...rest}
		className={cx(
			css`
				display: flex;

				justify-content: center;
				align-items: center;

				/* & > * {
				flex: 1;
			} */
			`,
			rest.className
		)}
	>
		{children}
	</div>
);

export type BoxProps = {} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const Box: FC<BoxProps> = ({ children, ref, ...rest }) => (
	<div
		{...rest}
		className={cx(
			css`
				display: flex;

				justify-content: center;
				align-items: center;

				margin: 0;
				padding: 0;

				/* width: 80px; */
				min-width: 80px;
				min-height: 80px;

				background-color: hsl(0, 0%, 90%);
				border: 1px solid hsla(0, 0%, 50%, 0.5);
			`,
			rest.className
		)}
	>
		{children}
	</div>
);

type SquareProps = {
	state: SquareState;
	isPartOfShortestPath?: boolean;
} & BoxProps;

export const SquareItem: FC<SquareProps> = ({ state, isPartOfShortestPath = false, children, ...rest }) => {
	const backgroundColor: string = isPartOfShortestPath && ![SquareState.Start, SquareState.End].includes(state)
		? "orange"
		: {
				[SquareState.Start]: "lime",
				[SquareState.End]: "green",
				[SquareState.Filled]: "hsl(0, 0%, 90%)",
				[SquareState.Clear]: "white",
		  }[state] || "hsl(0, 0%, 90%)";

	return (
		<Box
			{...rest}
			className={cx(
				css`
					background-color: ${backgroundColor};
				`,
				rest.className
			)}
		>
			{children}
		</Box>
	);
};

export interface RowOfSquaresProps { 
	rows: number;
	children: (row: number) => React.ReactNode;
}

export const RowOfSquares: FC<RowOfSquaresProps> = ({rows, children}) => {
	return <>
	{
						new Array(rows).fill(0).map((_, row) => {

							return <ul
								key={row}
								className={css`
									width: 100%;

									display: flex;
									flex-direction: row;

									list-style-type: none;

									margin: 0;
									padding: 0;

									justify-content: center;
									align-items: center;
								`}
							>
										{children(row)}
							</ul>
						}

						)
						
						
						}
						</>
}

interface SquareItemProps {
	rows: number;
	cols: number;
	row: number;
	grid: GridT;
	dispatch: any;
	indicesOfShortestPathSquares: Uint8Array;
}

export const Square: FC<SquareItemProps> = ({rows, cols, row, grid, dispatch, indicesOfShortestPathSquares}) => {

	return <>
	{ new Array(cols).fill(0).map((_, col) => {

										let squareIdx = to1DIdx(cols)(row, col);
										
										const squareState = grid[squareIdx];

										return  <li
										key={`${row}-${col}`}
										className={css`
											flex: 1;
										`}
									>
										<button
											type="button"
											onClick={() => dispatch(clickSquare(rows, cols, squareState, row, col, grid))}
											className={css`
												width: 100%;
												height: 100%;
											`}
										>
											<SquareItem
												state={squareState}
												isPartOfShortestPath={indicesOfShortestPathSquares.includes(squareIdx)}
											>
												{/* {square.row}-{square.col} */}
											</SquareItem>
										</button>
									</li>
										
									
									
									}) }
							</>	
}



export const Grid: FC = () => {
	const dispatch = useDispatch();

	const grid: GridT = useSelector((state: RootState) => state.grid.grid);
	const rows: number = useSelector((state: RootState) => state.grid.rows);
	const cols: number = useSelector((state: RootState) => state.grid.cols);

	const dirtyRows: number = useSelector((state: RootState) => state.grid.dirtyRows);
	const dirtyCols: number = useSelector((state: RootState) => state.grid.dirtyCols);

	const indicesOfShortestPathSquares: Uint8Array = useSelector((state: RootState) => state.grid.indicesOfShortestPathSquares);

	return (
		<>
			<main
				className={css`
					display: flex;
					flex-direction: column;

					& > * + * {
						margin-top: 4em;
					}
				`}
			>
				{/* logo */}
				<article>
					<img src="/gridster-logo.png" alt="Gridster logo" />
				</article>
				{/* /logo */}

				{/* generator */}
				<article
					className={css`
						background-color: hsla(0, 0%, 85%, 0.69);
						padding: 2em;
						border-radius: 8px;

						display: flex;
						flex-direction: row;

						justify-content: flex-start;
						align-items: flex-end;

						& > * + * {
							margin-left: 1em;
						}
					`}
				>
					<Label label="Rows">
						<input
							id="rows"
							type="number"
							value={dirtyRows}
							onChange={(e) => dispatch(eventuallySetRows(Number(e.target.value)))}
							className={css`
								font-size: 2em;
								padding: 0.2em 0.1em;
								max-width: 3em;
							`}
						/>
					</Label>

					<p className={css``}>x</p>

					<Label label="Columns">
						<input
							id="rows"
							type="number"
							value={dirtyCols}
							onChange={(e) => dispatch(eventuallySetCols(Number(e.target.value)))}
							className={css`
								font-size: 2em;
								padding: 0.2em 0.1em;
								max-width: 3em;
							`}
						/>
					</Label>

					<Button onClick={() => dispatch(commitResize())}>Generate</Button>
				</article>
				{/* /generator */}

				{/* grid */}
				<article
					className={css`
						background-color: hsla(0, 0%, 85%, 0.69);

						border: 1px solid hsla(0, 0%, 50%, 0.5);
					`}
				>
								<RowOfSquares rows={rows}>
									{(row) =>

									<Square rows={rows} cols={cols} row={row} grid={grid} dispatch={dispatch} indicesOfShortestPathSquares={indicesOfShortestPathSquares} ></Square>

									}
									</RowOfSquares>	
					

				</article>
				{/* /grid */}

				{/* UI states */}
				<article>
					<h2
						className={css`
							text-align: left;
						`}
					>
						UI States
					</h2>

					<div
						className={css`
							display: flex;
							flex-direction: column;

							& > * + * {
								margin-top: 3em;
							}
						`}
					>
						<Row
							className={css`
								justify-content: flex-start;
								& > * + * {
									margin-left: 4em;
								}
							`}
						>
							<Label label="Default">
								<Button>Generate</Button>
							</Label>

							<Label label="Hover">
								<Button
									className={css`
										background-color: hsl(220, 100%, 75%);
									`}
								>
									Generate
								</Button>
							</Label>

							<Label label="Down">
								<Button
									className={css`
										background-color: hsl(220, 100%, 35%);
									`}
								>
									Generate
								</Button>
							</Label>
						</Row>

						<Row
							className={css`
								justify-content: flex-start;
								& > * + * {
									margin-left: 4em;
								}
							`}
						>
							<Label label="Filled (default)">
								<SquareItem state={SquareState.Filled}/>
							</Label>

							<Label label="Hover">
								<Box
									className={css`
										background: hsla(0, 0%, 90%, 0.3);
									`}
								/>
							</Label>

							<Label label="Down">
								<Box
									className={css`
										background: hsla(0, 0%, 50%, 0.5);
									`}
								/>
							</Label>

							<Label label="Clear">
								<SquareItem state={SquareState.Clear} />
							</Label>
						</Row>

						<Row
							className={css`
								justify-content: flex-start;
								& > * + * {
									margin-left: 4em;
								}
							`}
						>
							<Label label="Start point">
								<SquareItem state={SquareState.Start} />
							</Label>

							<Label label="End point">
								<SquareItem state={SquareState.End}/>
							</Label>

							<Label label="Shortest path">
								<SquareItem state={SquareState.Clear} isPartOfShortestPath />
							</Label>
						</Row>
					</div>
				</article>
				{/* /UI states */}
			</main>
		</>
	);
};
