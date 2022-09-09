import { useState } from "react";

export const AddCategory = (props) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => setInputValue(target.value);

  const onSubmit = (event) => {
      event.preventDefault();
      if(inputValue.trim().length <= 1) return;

      setInputValue('');
      props.onAddCategory(inputValue.trim());
  };

  return (
    <form onSubmit={ onSubmit } >
        <input
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ (e) => onInputChange(e, props) }
        />
    </form>
  )
}
