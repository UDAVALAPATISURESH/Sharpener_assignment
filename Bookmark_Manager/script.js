let bookmarks = [];

function addBookmark() {
  const name = document.getElementById("bookmarkName").value.trim();
  const url = document.getElementById("bookmarkURL").value.trim();

  if (name && url) {
    bookmarks.push({ name, url });

    // Sort by name (key)
    bookmarks.sort((a, b) => a.name.localeCompare(b.name));

    displayBookmarks();

    document.getElementById("bookmarkName").value = '';
    document.getElementById("bookmarkURL").value = '';
  }
}

function displayBookmarks() {
  const list = document.getElementById("bookmarkList");
  list.innerHTML = '';

  bookmarks.forEach(bookmark => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.name}</a>`;
    list.appendChild(li);
  });
}
