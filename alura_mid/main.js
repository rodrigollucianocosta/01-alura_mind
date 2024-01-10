function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento === null ){
        console.log('Elemento não encontrado');
    }else{
        elemento.play();
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaTeclas.length; contador ++){
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];
   // console.log(instrumento);

    //template string `#som_{instrumento}`
    const idAudio = `#som_${instrumento}`;
    //console.log(idAudio);

    tecla.onclick = function (){
        tocaSom(idAudio);
    };
    //console.log(contador);

    tecla.onkeydown = function (evento){
        //tecla.classList.add('ativa');
        console.log(evento.code);

        if(evento.code === 'Space' || evento.code === 'Enter' ){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }
}
