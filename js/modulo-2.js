$(document).ready(function (){


      //HIDE E SHOW
      // $("#botaoHide").click(function(){
      //       $(".btn.block-b").hide(2000, function(){ //exemplo de callback incorporado ao .hide
      //             alert("Callback após efeito finalizar")
      //       }); 
      //       /*   .hide(200) = tempo de transição, também podemos
      //             utilizar os termos (' slow ') e (' fast ')  
      //       */
      //       console.log('hide');
      // });
      // $("#botaoShow").click(function(){
      //       $(".btn.block-b").show(2000);
      //       console.log('show');
      // });
      //HIDE E SHOW


      //TOGGLE
      // $("#botaoHide").click(function(){
      //       /*
      //       Forma mais simplificada do efeito hide e show, pois o
      //       toggle faz estas duas verificações automaticamente 
      //       */
      //       $(".btn.block-b").toggle(2000);
      //       console.log('show e hide');
      // });
      //TOGGLE
      

       //FADEOUT E FADEIN
      // $("#botaoIn").click(function(){
      //       /*
      //       in = surgir usando fade (//?desaparecer / aparecer / é basicamente um outro efeito suave)
      //       */
      //       $(".btn.block-b").fadeIn();
      // });
      
      // $("#botaoOut").click(function(){
      //       /*
      //       out = sair/esconder usando fade (//?desaparecer / aparecer / é basicamente um outro efeito suave
      //       */
      //       $(".btn.block-b").fadeOut();
      // });
       //FADEOUT E FADEIN


       //FADETOGGLE
      // $("#botaoToggle").click(function(){
      //       /*
      //       variação simplificada onde com uma unica função temos 
      //       tando o efeito do fade in quanto do fade out
      //       */        
      //       $(".btn.block-b").fadeToggle();
      // });
       //FADETOGGLE


      //SLIDEDOWN E SLIDE UP
      // $("#flip").click(function(){
      //       /*
      //       Forma de fazer blocos surgirem de diferentes direções
      //       Definição básica: slide Down faz o bloco sutgit de cima para baixo
      //       slide up faz o bloco surgir de baixo para cima
      //       */
      //       $("#painel").slideDown('slow');
      // });
      //SLIDEDOWN E SLIDE UP
      
      
      //SLIDETOGGLE
      // $('#flip').click(function(){
      //       $('#painel').slideToggle('slow');
      // });
      //SLIDETOGGLE


      //ANIMAÇÕES DE ELEMENTOS 
      // $('#efeito').click(function(){
      //       $(this).animate({
      //             right: '0'                 
      //       }, function(){ 
      //             /*
      //             fiz um teste usando callback, achei interessante, e acredito que abra algumas
      //             possibilidades de uso                  
      //             */
      //             console.log('estoy aqui');
      //             $('#efeito').animate({
      //                   left: '0',
      //                   right: 'inherit'
      //             });
      //       });       
      //});
      //ANIMAÇÕES DE ELEMENTOS COM ANIMATE


      //ENCADEAMENTO
      // $('#efeito').click(function(){
      //       // $(this).css('background-color', 'red').slideUp(2000).slideDown(2000).css('color', 'blue');;
      // });
      //ENCADEAMENTO


      //MANIPULAÇÃO DO DOM
      // var textoTitulo = $('.titulo').html();
      // alert(textoTitulo);
      // var paragrafo = $('.paragrafo').html();
      // alert(paragrafo);
      /*
      Pegando conteúdo de dentro de tags com .htm()
      */
      // $('#texto').blur(function(){/* 
      /* 
            !.blur: quando o elemento perde o foco
            !.val: neste caso serve para pegar valores que foram digitados, mas
            !tem outros usos
      */
            // var valor =$(this).val(); 
            // alert('Você digitou: ' + valor);
      // });
            // $('#botaoToLink').click(function(){
            //       var src = $('img').attr('src');
            //       alert('A imagem tem o caminho: ' + src)  
            // }); 
            /*ADICIONAR ALTERAR */
            // $('#botao1').click(function(){//altera texto com .text
            //       $('h1').text('Mudando texto do H1 com .text');                  
            // });  
            // $('#botao1').click(function(){//adicionar texto sem retirar o já existente com .append
            //       $('h1').append(' Adicionei isso agora');                  
            // });
            $('#botao1').click(function(){//adicionar html 
                  $('h1').append('<span class="m-2 badge bg-primary">Primary</span>');                  
            });
            /*ADICIONAR ALTERAR */

            $('#botao2').click(function(){//muda texto com .html
                  $('h2').html('<b>Mudando </b>texto do h2 com <a href="www.google.com.br">.html</a>')
            });
            $('#botao3').click(function(){//add valor ao input
                  $('#texto2').val('Link Trocado'); 
            });
            $('#botao4').click(function(){//troca href e text
                  $('#link').attr('href','https://agencias3.com.br' );
                  $('#link').text('Agencia s3');
            });
            $('#botao5').click(function(){//troca src
                  $('#image').attr('src','http://s2.glbimg.com/z_gIOSUdsxyNGClgVLYVBHBziyw=/0x0:400x400/400x400/s.glbimg.com/po/tt2/f/original/2016/05/20/new-google-favicon-logo.png' );
            });
      //MANIPULAÇÃO DO DOM
      //PAREI EM 1:15




});         