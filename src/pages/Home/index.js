import React, { useState, useEffect } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageTemplate from '../../components/PageTemplate';
import Loading from '../../components/Loading';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState({
    categorias: [],
  });

  const [featuredVideo, setFeaturedVideo] = useState({
    id: 0,
    url: '',
    titulo: '',
    categoriaId: 0,
  });

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categorias) => {
        setDadosIniciais({ categorias });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    if (dadosIniciais.categorias.length) {
      const categoryQty = dadosIniciais.categorias.length;
      const selectedCatIndex = Math.floor(Math.random() * categoryQty);
      const videosQty = dadosIniciais.categorias[selectedCatIndex].videos.length;
      const selectedVidIndex = Math.floor(Math.random() * videosQty);
      const selectedVideo = dadosIniciais.categorias[selectedCatIndex].videos[selectedVidIndex];

      setFeaturedVideo(selectedVideo);
    }
  }, [dadosIniciais]);

  return (
    <div style={{ background: '#141414' }}>
      <PageTemplate>
        {
          (dadosIniciais.categorias.length === 0) && (
            <Loading>
              Carregando...
            </Loading>
          )
        }
        {
          featuredVideo.id !== 0 && (
            <BannerMain
              videoTitle={featuredVideo.titulo}
              url={featuredVideo.url}
            // videoDescription={"Desc"}
            />
          )
        }
        {
          dadosIniciais.categorias.length > 0 && dadosIniciais.categorias
            .map(categoria => (
              <Carousel key={`cat-${categoria.id}`} category={categoria} />
            ))
        }
      </PageTemplate>
    </div>
  );
}

export default Home;
