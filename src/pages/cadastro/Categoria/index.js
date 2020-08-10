/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, valores, clearValues } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);

    clearValues();
  }

  useEffect(() => {
    const API_URL = 'http://localhost:8080/categorias';

    fetch(API_URL)
      .then(async (respostaDaApi) => {
        const resposta = await respostaDaApi.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de categoria:
        {' '}
        {valores.titulo}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={valores.descricao}
          name="descricao"
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          value={valores.cor}
          name="cor"
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
