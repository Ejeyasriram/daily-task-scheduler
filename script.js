function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskTime = document.getElementById("taskTime");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "" || taskTime.value === "") {
    alert("Please enter task and time");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">
      ${taskTime.value} - ${taskInput.value}
    </span>
    <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
  taskTime.value = "";
}

function deleteTask(button) {
  button.parentElement.remove();
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}
