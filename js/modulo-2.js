$(document).ready(function (){

      $("#botaoHide").click(function(){
            $(".btn.block-b").hide(2000, function(){ //exemplo de callback incorporado ao .hide
                  alert("Callback após efeito finalizar")
            }); 
            /*   .hide(200) = tempo de transição, também podemos
                  utilizar os termos (' slow ') e (' fast ')  
            */
            console.log('hide');
      });
      $("#botaoShow").click(function(){
            $(".btn.block-b").show(2000);
            console.log('show');
      });

});         