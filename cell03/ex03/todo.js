window.onload = function () {
    loadTodos();
  
    document.getElementById('newBtn').addEventListener('click', function () {
      let todoText = prompt("Enter your new TO DO:");
      if (todoText && todoText.trim() !== "") {
        addTodo(todoText.trim());
        saveTodos();
      }
    });

    
  
};
  