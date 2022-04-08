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

      // $('.lista-quiz-respostas li').keyup(function (){ //keyup = tecla for solta //após abre-se um callback
      //       var valor = $(this).val().toLowerCase(); //transforma em letra minusculo

      //       $('.lista-quiz-respostas li').filter(function (){ //filter = filtra pelos itens dentro da tr
      //             $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1 ) //indexOf = se existir um texto igual
      //       })  

      // });

//!!ASSISTIDO ATÉ 2:25 ( https://www.youtube.com/watch?v=MIogKzdxDYU )

});         