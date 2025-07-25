
document.getElementById("add-btn").addEventListener("click", () => {
  const input = document.getElementById("todo-input");
  const value = input.value.trim();
  if (value) {
    const li = document.createElement("li");
    li.textContent = value;
    document.getElementById("todo-list").appendChild(li);
    input.value = "";
  }
});
ss