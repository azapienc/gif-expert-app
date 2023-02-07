import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 0)
      return
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder='Search...'
          value={inputValue}
          onChange={(e) => onInputChange(e)} />
      </form>
    </>
  )
}
