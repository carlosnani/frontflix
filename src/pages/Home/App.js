import React from 'react';
import Menu from '../../components/Menu/index'
import dadosIniciais from "../../data/dados_iniciais.json";
import BannerMain from '../../components/BannerMain/index';
import Footer from '../../components/Footer/index';
import Carousel from '../../components/Carousel/index';

//HotLoad - È o que faz atualizar automaticamente o React

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[1].titulo}
        url={dadosIniciais.categorias[0].videos[1].url}
        videoDescription={"Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e ..."}
      />
        
       <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer/>
    </div>
  );
}

export default Home;
