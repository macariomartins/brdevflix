/* eslint-disable no-param-reassign */
import config from '../config';

function getAll() {
  const endpoint = [config.API_URL, 'videos'].join('/');
  const videos = fetch(endpoint).then(async (resposta) => {
    if (resposta.ok) {
      const corpoResposta = await resposta.json();
      return corpoResposta;
    }

    throw new Error('Não foi possível obter os dados');
  });

  return videos;
}

function addNew(video) {
  const endpoint = [config.API_URL, 'videos'].join('/');

  video.categoriaId = Number(video.categoriaId);

  fetch(endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(video),
  });
}

export default {
  getAll,
  addNew,
};
