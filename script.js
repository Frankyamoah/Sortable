
// Define a function that loads data into the table based on the current page and search term
const loadData = (data, currentPage, resultsPerPage) => {
  // Get the table element and search input element
  const table = document
    .getElementById("jsonTable")
    .getElementsByTagName("tbody")[0];
  const searchInput = document.querySelector("[data-search]");

  // Get the search term from the input element and convert it to lowercase
  const searchTerm = searchInput.value.trim().toLowerCase();

  // Filter the data array based on the search term
  const filteredData = data.filter((hero) =>
    hero.name.toLowerCase().includes(searchTerm)||
    hero.biography.fullName.toLowerCase().includes(searchTerm)||
    hero.powerstats.intelligence.toString().toLowerCase().includes(searchTerm)||
    hero.powerstats.intelligence.toString().toLowerCase().includes(searchTerm)||
    hero.powerstats.strength.toString().toLowerCase().includes(searchTerm)||
    hero.powerstats.speed.toString().toLowerCase().includes(searchTerm)||
    hero.powerstats.durability.toString().toLowerCase().includes(searchTerm)||
    hero.powerstats.power.toString().toLowerCase().includes(searchTerm)||
    hero.appearance.gender.toLowerCase().includes(searchTerm)||
    hero.appearance.height.toString().toLowerCase().includes(searchTerm)||
    hero.appearance.weight.toString().toLowerCase().includes(searchTerm)||
    hero.biography.placeOfBirth.toLowerCase().includes(searchTerm)||
    hero.biography.alignment.toLowerCase().includes(searchTerm)

  );

  // Calculate the range of data to display on the current page
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  // Clear the table before loading new data
  table.innerHTML = "";

  // Loop over the data to be displayed on the current page and create a new row for each item
  for (const hero of pageData) {
    const row = table.insertRow();
    const imageCell = row.insertCell();
    const nameCell = row.insertCell();
    const fullNameCell = row.insertCell();
    const intelligenceCell = row.insertCell();
    const strengthCell = row.insertCell();
    const speedCell = row.insertCell();
    const durabilityCell = row.insertCell();
    const powerCell = row.insertCell();
    const raceCell = row.insertCell();
    const genderCell = row.insertCell();
    const heightCell = row.insertCell();
    const weightCell = row.insertCell();
    const placeOfBirthCell = row.insertCell();
    const alignmentCell = row.insertCell();

    // Populate each cell with data from the current item
    imageCell.innerHTML = `<img src="${hero.images.xs}" />`;
    nameCell.innerHTML = hero.name;
    fullNameCell.innerHTML = hero.biography.fullName;
    intelligenceCell.innerHTML = hero.powerstats.intelligence;
    strengthCell.innerHTML = hero.powerstats.strength;
    speedCell.innerHTML = hero.powerstats.speed;
    durabilityCell.innerHTML = hero.powerstats.durability;
    powerCell.innerHTML = hero.powerstats.power;
    raceCell.innerHTML = hero.appearance.race;
    genderCell.innerHTML = hero.appearance.gender;
    heightCell.innerHTML = hero.appearance.height;
    weightCell.innerHTML = hero.appearance.weight;
    placeOfBirthCell.innerHTML = hero.biography.placeOfBirth;
    alignmentCell.innerHTML = hero.biography.alignment;
  }
};

// Define the URL for the superhero data API
const url =
  "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";

// Fetch the data from the API and load it into the table
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Get the search input element, results per page select element, and navigation buttons
    const searchInput = document.querySelector("[data-search]");
    const resultsPerPageSelect = document.getElementById("results-per-page");
    let currentPage = 1;
    let resultsPerPage = parseInt(resultsPerPageSelect.value);
    let filteredData = data;
    const prevButton = document.getElementById("previous-button");
    const nextButton = document.getElementById("next-button");

    // Load the initial data into the table
    loadData(data, currentPage, resultsPerPage);

    // Add an event listener to the search input element to filter the data and reload the table on input change
    searchInput.addEventListener("input", () => {
      currentPage = 1;
      const searchTerm = searchInput.value.trim().toLowerCase();
      filteredData = data.filter((hero) =>
      hero.name.toLowerCase().includes(searchTerm)||
      hero.biography.fullName.toLowerCase().includes(searchTerm)||
      hero.powerstats.intelligence.toString().toLowerCase().includes(searchTerm)||
      hero.powerstats.intelligence.toString().toLowerCase().includes(searchTerm)||
      hero.powerstats.strength.toString().toLowerCase().includes(searchTerm)||
      hero.powerstats.speed.toString().toLowerCase().includes(searchTerm)||
      hero.powerstats.durability.toString().toLowerCase().includes(searchTerm)||
      hero.powerstats.power.toString().toLowerCase().includes(searchTerm)||
      hero.appearance.gender.toLowerCase().includes(searchTerm)||
      hero.appearance.height.toString().toLowerCase().includes(searchTerm)||
      hero.appearance.weight.toString().toLowerCase().includes(searchTerm)||
      hero.biography.placeOfBirth.toLowerCase().includes(searchTerm)||
      hero.biography.alignment.toString().toLowerCase().includes(searchTerm)
      );
      loadData(filteredData, currentPage, resultsPerPage);
    });
    // This event listener listens for changes to the "results per page" dropdown menu, and updates the page accordingly
    resultsPerPageSelect.addEventListener("change", () => {
      currentPage = 1; // Set the current page to 1
      const selectedValue = resultsPerPageSelect.value; // Get the selected value from the dropdown menu
      resultsPerPage =
        selectedValue === "All" ? filteredData.length : parseInt(selectedValue); // Set the number of results per page, either to "All" if selected or to the integer value of the selection
      loadData(filteredData, currentPage, resultsPerPage); // Load the data for the current page and number of results per page
    });

    // This event listener listens for clicks on the "previous" button and updates the page accordingly
    prevButton.addEventListener("click", () => {
      if (currentPage > 1) {
        // If the current page is not the first page
        currentPage--; // Decrease the current page number by 1
        loadData(filteredData, currentPage, resultsPerPage); // Load the data for the current page and number of results per page
      }
    });

    // This event listener listens for clicks on the "next" button and updates the page accordingly
    nextButton.addEventListener("click", () => {
      if (currentPage < filteredData.length / resultsPerPage) {
        // If the current page is not the last page
        currentPage++; // Increase the current page number by 1
        loadData(filteredData, currentPage, resultsPerPage); // Load the data for the current page and number of results per page
      }
    });
  })
  .catch((error) => console.error("Error:", error));



  function sortTable(columnIndex) {
    const table = document.getElementById("jsonTable");
    const tbody = table.getElementsByTagName("tbody")[0];
    const rows = tbody.getElementsByTagName("tr");
    const sortDirection =
      table.getAttribute("data-sort-direction") === "asc" ? -1 : 1;
  
    const sortedRows = Array.from(rows).sort((rowA, rowB) => {
      const cellA = rowA.getElementsByTagName("td")[columnIndex];
      const cellB = rowB.getElementsByTagName("td")[columnIndex];
  
      let valueA = cellA.textContent.trim();
      let valueB = cellB.textContent.trim();
  
      // Split values with comma and treat each value as a separate number
      valueA = valueA.split(",").map((s) => parseFloat(s.trim()));
      valueB = valueB.split(",").map((s) => parseFloat(s.trim()));
  
      // Strip out non-numeric characters from each value
      valueA = valueA.map((v) => isNaN(v) ? 0 : v).reduce((a, b) => a + b, 0);
      valueB = valueB.map((v) => isNaN(v) ? 0 : v).reduce((a, b) => a + b, 0);
  
      // Convert units of measurement to a common unit if necessary
      // For example: convert "cm" to "in" if the table has both units
      // If all values are in the same unit, this step can be skipped
      // ...
  
      // Keep any values containing a dash symbol ("-") at the bottom of the sort
      if (valueA.toString().includes("-")) {
        valueA = sortDirection === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      }
      if (valueB.toString().includes("-")) {
        valueB = sortDirection === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      }
  
      if (valueA < valueB) {
        return -1 * sortDirection;
      } else if (valueA > valueB) {
        return 1 * sortDirection;
      } else {
        return 0;
      }
    });
  
    // Remove existing rows from the table
    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }
  
    // Add the sorted rows to the table
    sortedRows.forEach((sortedRow) => {
      tbody.appendChild(sortedRow);
    });
  
    // Update the sort direction attribute of the table
    const newSortDirection = sortDirection === 1 ? "asc" : "desc";
    table.setAttribute("data-sort-direction", newSortDirection);
  }
  