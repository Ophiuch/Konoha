function AddTask() {
  const inputBox = document.getElementById("input-box");
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Пожалуйста, введите задачу.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  li.addEventListener("click", toggleTaskStatus);

  document.getElementById("list-container").appendChild(li);

  inputBox.value = "";
}

function toggleTaskStatus(event) {
  const task = event.target;
  task.classList.toggle("checked");
}

document.querySelectorAll("#list-container li").forEach((item) => {
  item.addEventListener("click", toggleTaskStatus);
});
