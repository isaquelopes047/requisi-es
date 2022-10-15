import { conectaApi } from "./conectaApi.js";

//importando layout do card
import constroiCard from './mostrarVideos.js';

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    //remove e apresenta somente a busca desejada 
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }

    // para cada resultado encontrado cria um novo filho
    busca.forEach(elemento => lista.appendChild(constroiCard(
        elemento.titulo, 
        elemento.descricao, 
        elemento.url, 
        elemento.imagem
    )))
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento))