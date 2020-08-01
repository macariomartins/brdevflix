/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const categoriaTemplate = {
    cor: '#E50914',
    titulo: '',
    descricao: '',
  };

  const [categoria, setCategoria] = useState(categoriaTemplate);
  const [listaCategorias, setListaCategorias] = useState([]);

  function handleAlteracoesFormulario({ target }) {
    const chave = target.getAttribute('name');
    const valor = target.value;

    const categoriaAtual = {
      ...categoria,
      [chave]: valor,
    };

    setCategoria(categoriaAtual);
  }

  function handleAdicionaCategoria() {
    if (categoria.titulo) {
      categoriasRepository.addNew(categoria);
      setCategoria(categoriaTemplate);
    }
  }

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categorias) => {
        setListaCategorias(categorias);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageTemplate>
      <h1 style={{ marginBottom: '45px' }}>
        Cadastro de categoria:
        {' '}
        {categoria.titulo}
      </h1>

      <form onSubmit={(evento) => { evento.preventDefault(); }}>

        <FormField
          name="titulo"
          label="Nome da categoria"
          type="text"
          value={categoria.titulo}
          onChange={handleAlteracoesFormulario}
        />

        <FormField
          name="descricao"
          label="Descrição"
          type="textarea"
          value={categoria.descricao}
          onChange={handleAlteracoesFormulario}
        />

        <FormField
          name="cor"
          label="Cor"
          type="color"
          value={categoria.cor}
          onChange={handleAlteracoesFormulario}
        />

        <Button type="submit" onClick={handleAdicionaCategoria}>
          Cadastrar
        </Button>
      </form>

      <Link className="GoHome" to="/">
        Voltar para a Home
      </Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
