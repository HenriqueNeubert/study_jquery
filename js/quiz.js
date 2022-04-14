$(document).ready(function (){

      $('.lista-quiz-respostas li').click(function(){
            var correta = $('.lista-quiz-respostas li.certa').text();
            if($(this).hasClass('certa')){
                  //CERTO
                  $(this).addClass('verde')
                  $('.proximo').css('opacity', '1')
                  $('.proximo').css('pointer-events', 'initial')
            }else{
                  //ERRADO
                  $(this).addClass('errada')
                  $('.game-over').addClass('active')
                  $('.game-over-resposta').append(correta)
                  $('.lista-quiz-respostas li').addClass('disabled')
            }
      }) 

      // const questoes = [
      //       "lorem ipsum dolor sit amet 01?",
      //       "lorem ipsum dolor sit amet 02?",
      //       "lorem ipsum dolor sit amet 03?",

      // ];

            let questoes = {}
            questoes.pergunta = 'O que é css?'         
            questoes.respostas = []
            questoes.respostas.push(
                  {
                        "resposta": 'resposta01',
                        "valor": false
                  },
                  {
                        "resposta": 'resposta02',
                        "valor": true
                  },
                  {
                        "resposta": 'resposta03',
                        "valor": false
                  },
                  {
                        "resposta": 'resposta04',
                        "valor": false
                  },
                  {
                        "resposta": 'resposta05',
                        "valor": false
                  }
            )
            console.log(questoes)

            // for($i = 0; $i <= 4; $i++){
            //       console.log(questoes.respostas[$i]);
            // }     

      // $('.lista-quiz-respostas li').keyup(function (){ //keyup = tecla for solta //após abre-se um callback
      //       var valor = $(this).val().toLowerCase(); //transforma em letra minusculo

      //       $('.lista-quiz-respostas li').filter(function (){ //filter = filtra pelos itens dentro da tr
      //             $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1 ) //indexOf = se existir um texto igual
      //       })  

      // });

//!!ASSISTIDO ATÉ 2:25 ( https://www.youtube.com/watch?v=MIogKzdxDYU )

});         