import  React from 'react';
import PageDefault from './../../../components/PageDefault/index';
import { Link } from 'react-router-dom';


function CadastroVideo() {
    return (
        <PageDefault>
           <h1>Cadastro de Vídeo</h1>

           <Link to='/cadastro/video/categoria'>
               Cadastrar Categoria 
           </Link>
        </PageDefault>
    )     
}

export default CadastroVideo;