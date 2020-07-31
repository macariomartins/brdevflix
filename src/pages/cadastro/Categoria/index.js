import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const categoriasEndpoint = 'http://localhost:8080/categorias';
  const categoriaTemplate = {
    cor: '',
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
      const categorias = [...listaCategorias, categoria];

      setListaCategorias(categorias);
      setCategoria(categoriaTemplate);
    }
  }

  useEffect(() => {
    fetch(categoriasEndpoint).then(async (resposta) => {
      const categorias = await resposta.json();

      setListaCategorias([
        ...categorias,
      ]);
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

      {
        listaCategorias.length === 0 && (
          <div>
            Carregando...
          </div>
        )
      }

      <ul>
        {
          listaCategorias.map((categoriaObjeto) => (
            <li key={`cat-${categoriaObjeto.titulo}`}>{categoriaObjeto.titulo}</li>
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
