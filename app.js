// Módulo de formulario - add-task-form
// Módulo de listado - list-tasks
// Módulo de eliminación - delete-task
// Módulo de edición - edit-task
// Validación de entrada - fix-empty-input

const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (input.value.trim() === '') {
    alert('La tarea no puede estar vacía.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = input.value;

  const buttons = document.createElement('div');
  buttons.classList.add('task-buttons');

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏️ Editar';
  editBtn.classList.add('btn-edit');
  editBtn.onclick = () => {
    const newText = prompt('Editar tarea:', li.childNodes[0].textContent);
    if (newText) li.childNodes[0].textContent = newText;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑 Eliminar';
  deleteBtn.classList.add('btn-delete');
  deleteBtn.onclick = () => li.remove();

  buttons.appendChild(editBtn);
  buttons.appendChild(deleteBtn);
  li.appendChild(buttons);
  list.appendChild(li);
  input.value = '';
});