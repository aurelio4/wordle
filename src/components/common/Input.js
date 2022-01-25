import React from 'react'

const Input = (props) => {
    return (
      <input
        className="letter-input"
        type="text"
        minLength={1}
        maxLength={1}
        onChange={(e) => props.onChange(e)}
        value={props.value}
        required
      />
    );
}

export default Input