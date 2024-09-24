$(document).ready(function(){
    console.log($('#botao-cancelar'))

    $('form').on('submit', function(e){
        e.preventDefault();

        const tarefaAcrescentada = $('#nova-tarefa').val();
        const novoItem = $('#itemLista');
        $(`<li class="tarefas-adicionadas"> 
                <h2>${tarefaAcrescentada}</h2>
            </li>`).appendTo(novoItem);
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn(1000);
        $('#nova-tarefa').val('');
    })

    $('#itemLista').on('click', 'li', function(e) {
        $(e.target).toggleClass('concluida');
    });

    $('#botao-cancelar').click(function() {
        $('#itemLista').empty();
    })  

})

