// adicionar tarefa
function addTodoItem() {
  var todoItem = $("#new-todo-item").val();
  $("#todo-list").append("<li><input type='checkbox'" + 
                         " name='todo-item-done'" + 
                         " class='todo-item-done'"+ 
                         " value='" + todoItem + "' /> " + 
                         todoItem +
                         " <button class='delete'>"+
                         "Delete</button></li>");
  
 $("#new-todo-item").val("");
}

// deletar tarefa selecionada
function deleteTodoItem(e, item) {
  e.preventDefault();
  $(item).parent().fadeOut('slow', function() { 
    $(item).parent().remove();
  });
}
// Marcar tarefa como concluída(riscar)              
function completeTodoItem() {  
  $(this).parent().toggleClass("strike");
}

// função para clicar em adicionar e aparecer tarefa
$(function() { 
   $("#add-todo-item").on('click', function(e){
     e.preventDefault();
     addTodoItem()
   });
  
  // para funcionar o fadeout
  $("#todo-list").on('click', '.delete', function(e){
    var item = this; 
    deleteTodoItem(e, item)
  })
  
  // para quando clicar no Box, marcar automaticamente
  $(document).on('click', ".todo-item-done", completeTodoItem)

});