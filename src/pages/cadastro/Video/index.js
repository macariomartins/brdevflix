/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../../../components/ButtonLink';
import PageTemplate from '../../../components/PageTemplate';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';
import FormSelect from '../../../components/FormSelect';

function CadastroVideo() {
  const videoTemplate = {
    url: '',
    titulo: '',
    descricao: '',
    categoriaId: 0,
  };

  const [video, setVideo] = useState(videoTemplate);
  const [listaCategorias, setListaCategorias] = useState([]);

  function handleAlteracoesFormulario({ target }) {
    const chave = target.getAttribute('name');
    const valor = target.value;

    const videoAtual = {
      ...video,
      [chave]: valor,
    };

    setVideo(videoAtual);
  }

  function handleAdicionaVideo() {
    if (video.titulo) {
      videosRepository.addNew(video);
      setVideo(videoTemplate);
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
        Cadastro de vídeo
      </h1>

      <ButtonLink to="/cadastro/categoria">
        Cadastrar nova categoria
      </ButtonLink>

      <form onSubmit={(evento) => { evento.preventDefault(); }}>

        <FormField
          name="url"
          label="URL do Vídeo"
          type="text"
          value={video.url}
          onChange={handleAlteracoesFormulario}
        />

        <FormField
          name="titulo"
          label="Título do Vídeo"
          type="text"
          value={video.titulo}
          onChange={handleAlteracoesFormulario}
        />

        <FormField
          name="descricao"
          label="Descrição"
          type="textarea"
          value={video.descricao}
          onChange={handleAlteracoesFormulario}
        />

        <FormSelect
          name="categoriaId"
          label="Categoria"
          value={Number(video.categoriaId)}
          onChange={handleAlteracoesFormulario}
        >
          {
            listaCategorias.length === 0 && (
              <option defaultValue disabled>
                Carregando...
              </option>
            )
          }
          {
            listaCategorias.map((categoriaObjeto) => (
              <option
                value={categoriaObjeto.id}
                key={`cat-${categoriaObjeto.titulo}`}
              >
                {categoriaObjeto.titulo}
              </option>
            ))
          }
        </FormSelect>

        <Button type="submit" onClick={handleAdicionaVideo}>
          Cadastrar
        </Button>
      </form>



      <Link to="/">
        Ir para a home
      </Link>
    </PageTemplate>
  );
}

export default CadastroVideo;
