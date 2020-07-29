import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  const categoryQty = dadosIniciais.categorias.length;
  const featuredCategoryIndex = Math.floor(Math.random() * categoryQty);
  const videosQty = dadosIniciais.categorias[featuredCategoryIndex].videos.length;
  const featuredVideoIndex = Math.floor(Math.random() * videosQty);
  const featuredVideo = dadosIniciais.categorias[featuredCategoryIndex].videos[featuredVideoIndex];

  // console.log('dadosIniciais', dadosIniciais.categorias.length);
  // console.log('categoryQty', categoryQty);
  // console.log('featuredCategoryIndex', featuredCategoryIndex);
  // console.log('videosQty', videosQty);
  // console.log('featuredVideoIndex', featuredVideoIndex);
  // console.log('featuredVideo', featuredVideo);

  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain
        videoTitle={featuredVideo.titulo}
        url={featuredVideo.url}
      // videoDescription={"O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default App;