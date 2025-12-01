const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("list");
const reloadBtn = document.getElementById("reloadBtn");

window.addEventListener("load", renderStored);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const txt = input.value.trim();
  if (!txt) return;

  const obj = {
    id: "task-" + crypto.randomUUID().replace(/-/g, ""),
    content: txt
  };

  const items = getItems();
  items.unshift(obj);
  localStorage.setItem("tasks", JSON.stringify(items));

  addItemToDom(obj);
  input.value = "";
});

reloadBtn.addEventListener("click", () => location.reload());

function getItems() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function renderStored() {
  const items = getItems();
  items.forEach(addItemToDom);
}

function addItemToDom(item) {
  const li = document.createElement("li");
  li.id = item.id;

  const textSpan = document.createElement("span");
  textSpan.textContent = item.content;

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.className = "del-btn";

  btn.addEventListener("click", function () {
    li.remove();
    const updated = getItems().filter(t => t.id !== item.id);
    localStorage.setItem("tasks", JSON.stringify(updated));
  });

  li.appendChild(textSpan);
  li.appendChild(btn);

  list.prepend(li);
}
