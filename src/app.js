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
				{/* <Row
					gameState={gameState}
					handleFirstLetterChange={handleFirstLetterChange}
					handleSecondLetterChange={handleSecondLetterChange}
					handleThirdLetterChange={handleThirdLetterChange}
					handleFourthLetterChange={handleFourthLetterChange}
					handleFifthLetterChange={handleFifthLetterChange}
				/> */}
			</div>
			<div className="third-row-container">
				{/* <Row
					gameState={gameState}
					handleFirstLetterChange={handleFirstLetterChange}
					handleSecondLetterChange={handleSecondLetterChange}
					handleThirdLetterChange={handleThirdLetterChange}
					handleFourthLetterChange={handleFourthLetterChange}
					handleFifthLetterChange={handleFifthLetterChange}
				/> */}
			</div>
			<div className="fourth-row-container">
				{/* <Row
					gameState={gameState}
					handleFirstLetterChange={handleFirstLetterChange}
					handleSecondLetterChange={handleSecondLetterChange}
					handleThirdLetterChange={handleThirdLetterChange}
					handleFourthLetterChange={handleFourthLetterChange}
					handleFifthLetterChange={handleFifthLetterChange}
				/> */}
			</div>
			<div className="fifth-row-container">
				{/* <Row
					gameState={gameState}
					handleFirstLetterChange={handleFirstLetterChange}
					handleSecondLetterChange={handleSecondLetterChange}
					handleThirdLetterChange={handleThirdLetterChange}
					handleFourthLetterChange={handleFourthLetterChange}
					handleFifthLetterChange={handleFifthLetterChange}
				/> */}
			</div>
			<div className="sixth-row-container">
				{/* <Row
					gameState={gameState}
					handleFirstLetterChange={handleFirstLetterChange}
					handleSecondLetterChange={handleSecondLetterChange}
					handleThirdLetterChange={handleThirdLetterChange}
					handleFourthLetterChange={handleFourthLetterChange}
					handleFifthLetterChange={handleFifthLetterChange}
				/> */}
			</div>
		</div>
	);
}

export default App