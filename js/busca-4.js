$(document).ready(function (){

      $('#busca').on('keyup', function (){ //keyup = tecla for solta //após abre-se um callback
            var valor = $(this).val().toLowerCase(); //transforma em letra minusculo

            $('#myTable tr').filter(function (){ //filter = filtra pelos itens dentro da tr
                  $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1 ) //indexOf = se existir um texto igual
            })  

      });

      $('#buscaC').keyup(function (){ //keyup = tecla for solta //após abre-se um callback
            var valor = $(this).val().toLowerCase(); //transforma em letra minusculo

            $('.cards .col').filter(function (){ //filter = filtra pelos itens dentro da tr
                  $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1 ) //indexOf = se existir um texto igual
            })  

      });

//!!ASSISTIDO ATÉ 2:10 ( https://www.youtube.com/watch?v=MIogKzdxDYU )

});         