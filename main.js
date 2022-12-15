  function toca_Som (seletorAudio){
     const elemento =  document.querySelector(seletorAudio);
      if (elemento === null){
        console.log('não foi encontrado')
      }
      if (elemento != null){
       if(elemento.localName === 'audio');
        elemento.play();
      }

   }

   const listaDeTeclas = document.querySelectorAll('.tecla');

     
   for ( let contador = 0; contador < listaDeTeclas.length; contador++){
     const tecla = listaDeTeclas[contador]
     const instrumento = tecla.classList[1];
     const idAudio = `#som_${instrumento}`;//   template String
    
      tecla.onclick = function(){
      toca_Som(idAudio);
     }
     tecla.onkeydown = function(e){
   
    
      if (e.code === 'Space'|| e.code === "Enter"){
       tecla.classList.add('ativa');
    
  }
 

  
        
 }
   tecla.onkeyup = function (){
     tecla.classList.remove('ativa');

   }

  }

