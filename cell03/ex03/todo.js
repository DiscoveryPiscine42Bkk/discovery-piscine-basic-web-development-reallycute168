window.onload = function () /*work after loading all*/{
    loadTodos();
  
    document.getElementById('newbtn').addEventListener('click', function () {
      let todoText = prompt("Enter your new TO DO:");
      if (todoText && todoText.trim() !== "") {
        addtask(todoText.trim());
        savetodos();
      }
    });
    
    function addtask(text){
      const ftList = document.getElementById('ft_list');
      const todo = document.createElement('div');
      todo.className = 'todo';
      todo.textContent = text ;

      todo.addEventListener('click', function (){
        const confirmDelete = confirm("Delete");
        if (confirmDelete){
          ftList.removeChild(todo);
          saveTodos();
        }

      });

      ftList.appendChild(todo);
    }

    function saveTask() {
      const task = [];
      const taskElements = document.querySelectorAll('#ft_list .todo');
      taskElements.forEach(todo => task.push(todo.textContent));
      document.cookie = "task=" + encodeURIComponent(JSON.stringify(task)) + "; path=/";
    }
    

    function loadTodos() {
      const cookies = document.cookie.split("; ");
      const todoCookie = cookies.find(row => row.startsWith("task="));
      if (todoCookie) {
        const value = decodeURIComponent(todoCookie.split("=")[1]);
        try {
          const todos = JSON.parse(value);
          todos.forEach(todoText => addTodo(todoText));
        } catch (e) {
          console.error("Error loading todos:", e);
        }
      }
    }

  }
  