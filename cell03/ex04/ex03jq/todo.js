$(document).ready(function () {
  loadTodos();

  $('#newbtn').on('click', function () {
    let todoText = prompt("Enter your new TO DO:");
    if (todoText && todoText.trim() !== "") {
      addTask(todoText.trim());
      saveTodos();
    }
  });

  function addTask(text) {
    const $ftList = $('#ft_list');
    const $todo = $('<div class="todo"></div>').text(text);
    $todo.on('click', function () {
      const confirmDelete = confirm("Delete");
      if (confirmDelete) {
        $todo.remove();
        saveTodos();
      }
    });

    $ftList.append($todo);
  }

  function saveTodos() {
    const tasks = [];
    $('#ft_list .todo').each(function () {
      tasks.push($(this).text());
    });
    document.cookie = "task=" + encodeURIComponent(JSON.stringify(tasks)) + "; path=/";
  }

  function loadTodos() {
    const cookies = document.cookie.split("; ");
    const todoCookie = cookies.find(row => row.startsWith("task="));
    if (todoCookie) {
      const value = decodeURIComponent(todoCookie.split("=")[1]);
      try {
        const todos = JSON.parse(value);
        todos.forEach(todoText => addTask(todoText));
      } catch (e) {
        console.error("Error loading todos:", e);
      }
    }
  }
});
