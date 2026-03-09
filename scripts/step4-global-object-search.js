// Global search: search all values in jsObjectData
// This step demonstrates searching for a query in ANY field of the object

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");
const searchMessage = document.getElementById("searchMessage");

function renderObjectResults(items) {
  searchResults.innerHTML = "";
  if (items.length === 0) {
    searchResults.innerHTML = "<li>No results found.</li>";
    return;
  }
  items.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a href="${item.wikiLink}" target="_blank" class="card-link">
        <img src="${item.image}" alt="${item.name}">
        <span>${item.name}</span>
      </a>
    `;
    searchResults.appendChild(li);
    searchResults.appendChild(li);
  });
}

function handleGlobalObjectSearch() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    renderObjectResults(jsObjectData);
    searchMessage.textContent = "Type to search all fields";
    return;
  }

  const results = jsObjectData.filter(item => {
    const values = Object.values(item);

    return values.some(value => String(value).toLowerCase().includes(query));
  });
  renderObjectResults(results);
  searchMessage.textContent = results.length ? `Found ${results.length} result(s)` : `No results for: ${query}`;
}

// Search as you type
searchInput.addEventListener("input", handleGlobalObjectSearch);

// Search on button click
searchButton.addEventListener("click", handleGlobalObjectSearch);

// Initial render
renderObjectResults(jsObjectData);
searchMessage.textContent = "Type to search all fields";
