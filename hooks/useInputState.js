import {useState} from 'react';

function useInputState (initialVal) {
  const [value, setValue] = useState(initialVal);
  const handleChange = e => {
    setValue(e.target.value)
  };
  return [value, handleChange]
}

export default useInputState;