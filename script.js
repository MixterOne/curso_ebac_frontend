$(document).ready(function() {
    const form = $('form');

    form.on('submit', function(e){
        e.preventDefault();
        const addNewItem = $('#add-task').val();

        const newItem = `<li>${addNewItem}</li>`;
        $(newItem).appendTo('ul');

        //Pega a quantidade de li dentro do ul e adiciona no elemento com class="count" utilizando .text()
        var taskCount = $('ul li').length;
        $('.count').text(taskCount);

        $('#add-task').val("");
    });

    $('ul').on('click', 'li',function(){
        $(this).toggleClass('checked');

        //Pega a quantidade de elementos(length) com a class="checked" e adicionar no elemento com class="concluded" utilizando 
        //.text()
        var taskConcludedCount = $('.checked').length;
        $('.concluded').text(taskConcludedCount);
    });     
})
    