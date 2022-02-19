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
      //       /*
      //       .blur: quando o elemento perde o foco
      //       .val: neste caso serve para pegar valores que foram digitados, mas
      //       tem outros usos
      //       */
      //       var valor =$(this).val();
      //       alert('Você digitou: ' + valor);
      // });
            $('#botaoToLink').click(function(){
                  var link = $('#secretLink').attr('href');
                  alert('O link secreto é: ' + link)
            });
      //MANIPULAÇÃO DO DOM




});         