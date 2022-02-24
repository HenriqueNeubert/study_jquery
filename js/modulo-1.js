$(document).ready(function (){


      //INSERIR TEXTO
      // $("p.texto").html("Inserindo texto via jquery")//ex simples de como inserir texto em uma classe
      //INSERIR TEXTO


      //CLICK COM .CLICK
      // $("#botao").click(function(){
      //       //alert('Click in button') //alert ao clicar
      //       $('p').hide(); //apaga todos os p's ao clicar 
      // });
      //CLICK COM .CLICK


      //HOVER COM MOUSE .ENTER E .LEAVE
      // $("#botao").mouseenter(function(){
      //       alert('Mouse Enter') //alert ao passar mouse
      // });

      // $("#botao").mouseleave(function(){
      //       alert('Mouse Leave') //alert ao passar mouse
      // });
      //HOVER COM MOUSE ENTER E LEAVE


      //HOVER COM MOUSE .HOVER
      // $("#botao").hover(function(){
      //       alert('Mouse Entrou') //alert ao passar mouse                        
      // },
      //       function(){
      //             alert('Mouse Saiu') //alert ao passar mouse                        
      //       }
      // );
      //HOVER COM MOUSE .HOVER


      //FOCUS 
      // $("#campotexto").focus(function(){ //fazer algo quando o item for clicado
      //       $(this).css('background-color', 'yellow');
      // });   
      //FOCUS 


      //ON (CLICK)
      //exemplo-1
      // $("#campotexto").on('click', function(){ 
      //       $(this).css('background-color', 'yellow');
      //       /*outra forma de usar o click ou  até outros eventos pois os eventos 
      //       click-focus-mouseenter-mouseleave entre outros podem ser usados da mesma forma, 
      //       assim podemos usar multiplos eventos de uma forma mais organizada : exemplo-2*/                        
      // });
      
      //exemplo-2
      $('#botao').on({
            mouseenter: function(){
                  $(this).css('background-color','yellow');
            },
            click: function(){
                  $(this).css('background-color','red');                              
            },
            mouseleave: function(){
                  $(this).css('background-color','blue');                              
            }
      })
      //ON (CLICK)
            
});

//parei em 29min
//link https://www.youtube.com/watch?v=MIogKzdxDYU