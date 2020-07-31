import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const categoriaTemplate = {
    cor: '',
    nome: '',
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
    if (categoria.nome) {
      const categorias = [...listaCategorias, categoria];

      setListaCategorias(categorias);
      setCategoria(categoriaTemplate);
    }
  }

  return (
    <PageTemplate>
      <h1 style={{ marginBottom: '45px' }}>
        Cadastro de categoria:
        {' '}
        {categoria.nome}
      </h1>

      <form onSubmit={(evento) => { evento.preventDefault(); }}>

        <FormField
          name="nome"
          label="Nome da categoria"
          type="text"
          value={categoria.nome}
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

      <ul>
        {
          listaCategorias.map((categoriaObjeto) => (
            <li key={`cat-${categoriaObjeto.nome}`}>{categoriaObjeto.nome}</li>
          ))
        }
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </PageTemplate>
  );
}

export default CadastroCategoria;
