let notes = [];

function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const desc = document.getElementById("noteDesc").value.trim();
  const date = document.getElementById("noteDate").value;

  if (title && desc && date) {
    notes.push({ title, desc, date });

    displayNotes();

    document.getElementById("noteTitle").value = '';
    document.getElementById("noteDesc").value = '';
    document.getElementById("noteDate").value = '';
  }
}

function displayNotes() {
  const list = document.getElementById("noteList");
  list.innerHTML = '';

  notes.forEach(note => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${note.title}</strong><br>
      ${note.desc}<br>
      <em>${note.date}</em>
    `;
    list.appendChild(li);
  });
}
