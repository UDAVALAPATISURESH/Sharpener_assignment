let bookmarks = [];

function addBookmark() {
  const name = document.getElementById("bookmarkName").value.trim();
  const url = document.getElementById("bookmarkURL").value.trim();

  if (name && url) {
    bookmarks.push({ name, url });

    displayBookmarks();

    document.getElementById("bookmarkName").value = '';
    document.getElementById("bookmarkURL").value = '';
  }
}

function removeBookmark(index) {
  bookmarks.splice(index, 1);
  displayBookmarks();
}

function displayBookmarks() {
  const list = document.getElementById("bookmarkList");
  list.innerHTML = '';

  bookmarks.forEach((bookmark, index) => {
    const div = document.createElement('div');
    div.className = 'bookmark';

    div.innerHTML = `
      <span class="bookmark-title">${bookmark.name}</span>
      <a href="${bookmark.url}" target="_blank">Visit</a>
      <button onclick="removeBookmark(${index})">Remove</button>
    `;

    list.appendChild(div);
  });
}
