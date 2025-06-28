let notes = [];

function addNote() {
  const title = document.getElementById("noteTitle").value.trim();
  const desc = document.getElementById("noteDesc").value.trim();
  const date = document.getElementById("noteDate").value;

  if (!title || !desc || !date) {
    alert("Please fill all fields.");
    return;
  }

  if (notes.length >= 7) {
    alert("Maximum 7 notes allowed!");
    return;
  }

  notes.push({ title, desc, date });
  displayNotes();

  // Clear fields
  document.getElementById("noteTitle").value = '';
  document.getElementById("noteDesc").value = '';
  document.getElementById("noteDate").value = '';
}

function deleteNote(index) {
  notes.splice(index, 1);
  displayNotes();
}

function displayNotes() {
  const list = document.getElementById("noteList");
  list.innerHTML = '';

  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      <strong>${note.title}</strong><br>
      ${note.desc}<br>
      <em>${note.date}</em>
      <button onclick="deleteNote(${index})">Delete</button>
    `;
    list.appendChild(div);
  });
}
