import React, { useState } from 'react'

import Row from './components/common/Row'

const App = () => {
	const [gameState, setGameState] = useState({
		rows: [
			[
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
			],
			[
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
			],
			[
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
			],
			[
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
			],
			[
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
			],
			[
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
				{ letter: "", clue: 0 },
			],
		]
	})

	const updateLetter = (rowIdx, colIdx, e) => {
		const rows = gameState.rows
    const row = rows[rowIdx]

    const newLetter = e.target.value
    const newLetterObj = { ...row[colIdx], letter: newLetter.toUpperCase() }
    const newRow = [...row]
    newRow[colIdx] = newLetterObj
    const newRows = [...rows]
    newRows[rowIdx] = newRow

    setGameState({ ...gameState, rows: newRows })
	}

	return (
		<div className="game-container">
			<h1 className="title">Wordle</h1>
			<div className="first-row-container">
				<Row
					gameState={gameState}
					row={0}
					handleFirstLetterChange={(e) => { updateLetter(0, 0, e) }}
					handleSecondLetterChange={(e) => { updateLetter(0, 1, e) }}
					handleThirdLetterChange={(e) => { updateLetter(0, 2, e) }}
					handleFourthLetterChange={(e) => { updateLetter(0, 3, e) }}
					handleFifthLetterChange={(e) => { updateLetter(0, 4, e) }}
				/>
			</div>
			<div className="second-row-container">
				<Row
					gameState={gameState}
					row={1}
					handleFirstLetterChange={(e) => { updateLetter(1, 0, e) }}
					handleSecondLetterChange={(e) => { updateLetter(1, 1, e) }}
					handleThirdLetterChange={(e) => { updateLetter(1, 2, e) }}
					handleFourthLetterChange={(e) => { updateLetter(1, 3, e) }}
					handleFifthLetterChange={(e) => { updateLetter(1, 4, e) }}
				/>
			</div>
			<div className="third-row-container">
				<Row
					gameState={gameState}
					row={2}
					handleFirstLetterChange={(e) => { updateLetter(2, 0, e) }}
					handleSecondLetterChange={(e) => { updateLetter(2, 1, e) }}
					handleThirdLetterChange={(e) => { updateLetter(2, 2, e) }}
					handleFourthLetterChange={(e) => { updateLetter(2, 3, e) }}
					handleFifthLetterChange={(e) => { updateLetter(2, 4, e) }}
				/>
			</div>
			<div className="fourth-row-container">
				<Row
					gameState={gameState}
					row={3}
					handleFirstLetterChange={(e) => { updateLetter(3, 0, e) }}
					handleSecondLetterChange={(e) => { updateLetter(3, 1, e) }}
					handleThirdLetterChange={(e) => { updateLetter(3, 2, e) }}
					handleFourthLetterChange={(e) => { updateLetter(3, 3, e) }}
					handleFifthLetterChange={(e) => { updateLetter(3, 4, e) }}
				/>
			</div>
			<div className="fifth-row-container">
				<Row
					gameState={gameState}
					row={4}
					handleFirstLetterChange={(e) => { updateLetter(4, 0, e) }}
					handleSecondLetterChange={(e) => { updateLetter(4, 1, e) }}
					handleThirdLetterChange={(e) => { updateLetter(4, 2, e) }}
					handleFourthLetterChange={(e) => { updateLetter(4, 3, e) }}
					handleFifthLetterChange={(e) => { updateLetter(4, 4, e) }}
				/>
			</div>
			<div className="sixth-row-container">
				<Row
					gameState={gameState}
					row={5}
					handleFirstLetterChange={(e) => { updateLetter(5, 0, e) }}
					handleSecondLetterChange={(e) => { updateLetter(5, 1, e) }}
					handleThirdLetterChange={(e) => { updateLetter(5, 2, e) }}
					handleFourthLetterChange={(e) => { updateLetter(5, 3, e) }}
					handleFifthLetterChange={(e) => { updateLetter(5, 4, e) }}
				/>
			</div>
		</div>
	);
}

export default App