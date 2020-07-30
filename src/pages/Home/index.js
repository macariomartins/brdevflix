import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageTemplate from '../../components/PageTemplate';

function Home() {
  const categoryQty = dadosIniciais.categorias.length;
  const featuredCategoryIndex = Math.floor(Math.random() * categoryQty);
  const videosQty = dadosIniciais.categorias[featuredCategoryIndex].videos.length;
  const featuredVideoIndex = Math.floor(Math.random() * videosQty);
  const featuredVideo = dadosIniciais.categorias[featuredCategoryIndex].videos[featuredVideoIndex];

  return (
    <div style={{ background: "#141414" }}>
      <PageTemplate>
        <BannerMain
          videoTitle={featuredVideo.titulo}
          url={featuredVideo.url}
        // videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
        />

        {
          dadosIniciais.categorias.map(categoria => (
            <Carousel category={categoria} />
          ))
        }

      </PageTemplate>
    </div>
  );
}

export default Home;
