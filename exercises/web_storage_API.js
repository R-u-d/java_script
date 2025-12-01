const form = document.getElementById("dataForm");
const input = document.getElementById("dataInput");
const list = document.getElementById("dataList");
const reloadBtn = document.getElementById("reloadBtn");

// Helpers
function getStoredData() {
  return JSON.parse(localStorage.getItem("items")) || [];
}

function saveData(items) {
  localStorage.setItem("items", JSON.stringify(items));
}

function renderList(items) {
  list.innerHTML = "";
  items.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    list.prepend(li); // newest first
  });
}

// On Page Load
window.addEventListener("load", () => {
  const items = getStoredData();
  renderList(items);
});

// Form Submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const value = input.value.trim();
  if (!value) return;

  const items = getStoredData();
  items.unshift(value); // add to beginning

  saveData(items);
  renderList(items);

  form.reset();
});

// Reload Button
reloadBtn.addEventListener("click", () => {
  location.reload();
});
