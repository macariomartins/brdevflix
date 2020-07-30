import React from 'react';
import { Link } from 'react-router-dom';
import PageTemplate from '../../../components/PageTemplate';

function CadastroVideo() {
  return (
    <PageTemplate>
      <h1>Cadastro de vídeo</h1>

      <Link to="/cadastro/categoria">
        Cadastrar nova categoria
      </Link>
    </PageTemplate>
  );
}

export default CadastroVideo;
