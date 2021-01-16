function createTodo(text) {
    var markUp = '<li class="list-group-item"><input id="todo-checkbox" type="checkbox" value=""><label for="todo-checkbox">' + text + '</label></li>';
    $('.todo-list').append(markUp);
    $('.todo-add').val("");
}


$(document).ready(function () {
    var buttonLightMode = $('body');
    $('.btn-light-mode').click(function() {
        if ($('body').hasClass('dark-mode')) {
            $('body').removeClass('dark-mode');
            $('#todo-icon').attr('src', '/images/icon-sun.svg');
        } else {
            $('body').addClass('dark-mode');
            $('#todo-icon').attr('src', '/images/icon-moon.svg');
        }
    });
    
    $('.todo-add').keypress(function(e) {
        e.preventDefault;
        if (e.which == 13) {
            var addToList = $(this).val();
            createTodo(addToList);
        }
    });
    
    $('.todo-list input[type=checkbox]').change(function() {
        if (this.checked){
            $(this).parent().find('label').addClass('isDone');
        } else {
            $(this).parent().find('label').removeClass('isDone');
        }
    })
    
    $('.todo-list label').click(function(e) {
        e.preventDefault();
    })
});