import config from '../config';

function getAllWithVideos() {
  const endpoint = [config.API_URL, 'categorias?_embed=videos'].join('/');
  const categorias = fetch(endpoint).then(async (resposta) => {

    if (resposta.ok) {
      const corpoResposta = await resposta.json();
      return corpoResposta;
    }

    throw new Error('Não foi possível obter os dados');

  });

  return categorias;
}

export default {
  getAllWithVideos,
};
