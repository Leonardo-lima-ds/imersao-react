/* eslint-disable linebreak-style */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(ObjetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(ObjetoDoVideo),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        console.log(respostaDoServidor);
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados');
    });
}

export default {
  create,
};
