$(document).ready(function (){

//TRABALHANDO COM AJAX

$('#botaoAjax').click(function(){
      $('.blocoAjax').load('/partials/conteudo-externo-ajax.txt') //pegando um arquivo estranho
      console.log('ada');
})

// $('#botaoAjax').mouseover(function(){
//       $('.blocoAjax').load('/partials/conteudo-externo-ajax.txt') //pegando um arquivo estranho
//       console.log('ada');
// })

$('#cep').blur(function(){ //? Evento de Sair
      var valor = $(this).val(); //? Pega o valor digitado no campo CEP 

      $.ajax({
            url: "https://viacep.com.br/ws/" + valor + "/json/",
            type: "GET",
            success: function(dados,status){
                  $("#cidade").val(dados.localidade);
                  $("#uf").val(dados.uf);
            },
            error: function(){
                  alert("Error");
            }
      })

      // $.get("https://viacep.com.br/ws/" + valor + "/json/", function(dados, status){ //? Function de callback //$valor = imprime aqui o valor do campo CEP
      //       console.log(dados.localidade);
      //       $('#cidade').val(dados.localidade)
      //       $('#uf').val(dados.uf)
      // });
})

//!!ASSISTIDO ATÉ 1:57 ( https://www.youtube.com/watch?v=MIogKzdxDYU )
//TRABALHANDO COM AJAX

});         