$(document).ready(function () {

      $('.lista-quiz-respostas li').click(function () {
            var correta = $('.lista-quiz-respostas li.certa').text();
            if ($(this).hasClass('certa')) {
                  //CERTO
                  $(this).addClass('verde')
                  $('.proximo').css('opacity', '1')
                  $('.proximo').css('pointer-events', 'initial')
            } else {
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
      // let questoes = {}
      // questoes.pergunta = 'O que é css?'
      // questoes.respostas = []
      // questoes.respostas.push({
      //       "resposta": 'resposta01',
      //       "valor": false
      // }, {
      //       "resposta": 'resposta02',
      //       "valor": true
      // }, {
      //       "resposta": 'resposta03',
      //       "valor": false
      // }, {
      //       "resposta": 'resposta04',
      //       "valor": false
      // }, {
      //       "resposta": 'resposta05',
      //       "valor": false
      // })
      // // console.log(questoes)

      let questoes = [{
            titulo: 'esta é a pergunta 01',
            opcoes: [{
                        opcao: 'opção 01',
                        verifica: false,
                  },
                  {
                        opcao: 'opção 02',
                        verifica: false,
                  },
                  {
                        opcao: 'opção 03',
                        verifica: false,
                  }
            ],
            resposta_correta: 3,
            resposta: null
      }, {
            titulo: 'esta é a pergunta 02',
            opcoes: [{
                        opcao: 'opção 01',
                        verifica: false,
                  },
                  {
                        opcao: 'opção 02',
                        verifica: false,
                  },
                  {
                        opcao: 'opção 03',
                        verifica: false,
                  }
            ],
            resposta_correta: 2,
            resposta: null
      }, ]

      // console.log(questoes)
      // const layout = new Map(questoes);
      // layout.set(questoes[0].titulo, 1);
      // console.log(layout);

      let $layout = '';

            questoes.map((item, index) => {

            // este item é o teu objeto de pergunta

            $layout += `<li>${item.titulo}</li>`

            })

            console.log($layout)
      
      // for($a = 0; $a <= 3; $a++){
      //       $('.questao').text(questoes[$a].titulo)
      //       for($b = 0; $b <= 2;){
      //             // $('.lista-quiz-respostas .list-group-item').text(questoes[$b]).val()
      //             $('.lista-quiz-respostas').html('<li class="list-group-item list-group-item-secondary">' + questoes[$a].opcoes[$b].opcao + '</li>')
      //             $b++
      //             console.log(questoes[$a].opcoes[$b].opcao);
      //       }            
      //       // console.log(questoes[$i].titulo)
      //       // console.log(questoes[$i].opcoes[$i])
      //       // console.log(questoes[$i].opcoes[$i].verifica)
      //       // console.log('#######');
      // }

      // console.log(questoes[0].opcoes[0])


      // console.log(questoes[0].opcoes[0])
      // for($i = 0; $i <= 2; $i++){
      //       console.log(questoes[$i]);
      // }
      // $('.lista-quiz-respostas li').keyup(function (){ //keyup = tecla for solta //após abre-se um callback
      //       var valor = $(this).val().toLowerCase(); //transforma em letra minusculo
      //       $('.lista-quiz-respostas li').filter(function (){ //filter = filtra pelos itens dentro da tr
      //             $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1 ) //indexOf = se existir um texto igual
      //       })
      // });

      //? SOBRE ARRAYW treinaweb.com.br/blog/trabalhando-com-arrays-e-objetos-no-javascript

      //!!ASSISTIDO ATÉ 2:25 ( https://www.youtube.com/watch?v=MIogKzdxDYU )

});