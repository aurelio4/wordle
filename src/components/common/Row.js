import React from 'react'

import Input from './Input'

const Row = (props) => {
    return (
      <>
        <Input
          value={props.gameState.rows[props.row][0].letter}
          onChange={(e) => props.handleFirstLetterChange(e)}
        />
        <Input
          value={props.gameState.rows[props.row][1].letter}
          onChange={(e) => props.handleSecondLetterChange(e)}
        />
        <Input
          value={props.gameState.rows[props.row][2].letter}
          onChange={(e) => props.handleThirdLetterChange(e)}
        />
        <Input
          value={props.gameState.rows[props.row][3].letter}
          onChange={(e) => props.handleFourthLetterChange(e)}
        />
        <Input
          value={props.gameState.rows[props.row][4].letter}
          onChange={(e) => props.handleFifthLetterChange(e)}
        />
      </>
    );
}

export default Row