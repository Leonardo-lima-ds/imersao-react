/* eslint-disable linebreak-style */
import { useState } from 'react';

function useForm(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais);

  function setValor(chave, valor) {
    setValores({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValor(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearValues() {
    setValores(valoresIniciais);
  }

  return {
    handleChange,
    valores,
    clearValues,
  };
}

export default useForm;
