// const loadData = data => {

//   const table = document
//     .getElementById("jsonTable")
//     .getElementsByTagName("tbody")[0];

//   for (const hero of data) {
//     const row = table.insertRow();
//     const imageCell = row.insertCell();
//     const nameCell = row.insertCell();
//     const fullNameCell = row.insertCell();
//     const intelligenceCell = row.insertCell();
//     const strengthCell = row.insertCell();
//     const speedCell = row.insertCell();
//     const durabilityCell = row.insertCell();
//     const powerCell = row.insertCell();
//     const raceCell = row.insertCell();
//     const genderCell = row.insertCell();
//     const heightCell = row.insertCell();
//     const weightCell = row.insertCell();
//     const placeOfBirthCell = row.insertCell();
//     const alignmentCell = row.insertCell();

//     imageCell.innerHTML = `<img src="${hero.images.xs}" />`;
//     nameCell.innerHTML = hero.name;
//     fullNameCell.innerHTML = hero.biography.fullName;
//     intelligenceCell.innerHTML = hero.powerstats.intelligence;
//     strengthCell.innerHTML = hero.powerstats.strength;
//     speedCell.innerHTML = hero.powerstats.speed;
//     durabilityCell.innerHTML = hero.powerstats.durability;
//     powerCell.innerHTML = hero.powerstats.power;
//     raceCell.innerHTML = hero.appearance.race;
//     genderCell.innerHTML = hero.appearance.gender;
//     heightCell.innerHTML = hero.appearance.height;
//     weightCell.innerHTML = hero.appearance.weight;
//     placeOfBirthCell.innerHTML = hero.biography.placeOfBirth;
//     alignmentCell.innerHTML = hero.biography.alignment;
//   }
// }

// const url =
//   "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";

// fetch(url)
//   .then((response) => response.json())
//   .then((loadData))
//   .catch((error) => console.error("Error:", error))

// const searchInput = document.querySelector("[data-search]");
// const resultsPerPageSelect = document.getElementById("results-per-page");

////////////////
// const loadData = (data) => {
//   const table = document
//     .getElementById("jsonTable")
//     .getElementsByTagName("tbody")[0];
//   const searchInput = document.querySelector("[data-search]");
//   const searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term and convert to lowercase

//   // Filter the data array based on the search term
//   const filteredData = data.filter((hero) =>
//     hero.name.toLowerCase().includes(searchTerm)
//   );

//   for (const hero of filteredData) {
//     const row = table.insertRow();
//     const imageCell = row.insertCell();
//     const nameCell = row.insertCell();
//     const fullNameCell = row.insertCell();
//     const intelligenceCell = row.insertCell();
//     const strengthCell = row.insertCell();
//     const speedCell = row.insertCell();
//     const durabilityCell = row.insertCell();
//     const powerCell = row.insertCell();
//     const raceCell = row.insertCell();
//     const genderCell = row.insertCell();
//     const heightCell = row.insertCell();
//     const weightCell = row.insertCell();
//     const placeOfBirthCell = row.insertCell();
//     const alignmentCell = row.insertCell();

//     imageCell.innerHTML = `<img src="${hero.images.xs}" />`;
//     nameCell.innerHTML = hero.name;
//     fullNameCell.innerHTML = hero.biography.fullName;
//     intelligenceCell.innerHTML = hero.powerstats.intelligence;
//     strengthCell.innerHTML = hero.powerstats.strength;
//     speedCell.innerHTML = hero.powerstats.speed;
//     durabilityCell.innerHTML = hero.powerstats.durability;
//     powerCell.innerHTML = hero.powerstats.power;
//     raceCell.innerHTML = hero.appearance.race;
//     genderCell.innerHTML = hero.appearance.gender;
//     heightCell.innerHTML = hero.appearance.height;
//     weightCell.innerHTML = hero.appearance.weight;
//     placeOfBirthCell.innerHTML = hero.biography.placeOfBirth;
//     alignmentCell.innerHTML = hero.biography.alignment;
//   }
// };

// const url =
//   "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     loadData(data);

//     const searchInput = document.querySelector("[data-search]");
//     const resultsPerPageSelect = document.getElementById("results-per-page");

//     searchInput.addEventListener("input", () => {
//       const table = document
//         .getElementById("jsonTable")
//         .getElementsByTagName("tbody")[0];
//       table.innerHTML = ""; // Clear the table before loading filtered data
//       loadData(data); // Reload the table with the filtered data
//     });

//     resultsPerPageSelect.addEventListener("change", () => {
//       const table = document
//         .getElementById("jsonTable")
//         .getElementsByTagName("tbody")[0];
//       table.innerHTML = ""; // Clear the table before reloading with new results per page
//       loadData(data); // Reload the table with the new results per page
//     });
//   })
//   .catch((error) => console.error("Error:", error));

// // // Function to add sort, ascending and descending
// // function sortTable(columnIndex) {
// //   const table = document.getElementById("jsonTable");
// //   const tbody = table.getElementsByTagName("tbody")[0];
// //   const rows = tbody.getElementsByTagName("tr");
// //   const sortDirection = table.getAttribute("data-sort-direction") === "asc" ? -1 : 1;

// //   const sortedRows = Array.from(rows)
// //     .sort((rowA, rowB) => {
// //       const cellA = rowA.getElementsByTagName("td")[columnIndex];
// //       const cellB = rowB.getElementsByTagName("td")[columnIndex];

// //       const valueA = cellA.textContent.trim() || (sortDirection === 1 ? "\uffff" : "");
// //       const valueB = cellB.textContent.trim() || (sortDirection === 1 ? "\uffff" : "");

// //       if (valueA < valueB) {
// //         return -1 * sortDirection;
// //       } else if (valueA > valueB) {
// //         return 1 * sortDirection;
// //       } else {
// //         return 0;
// //       }
// //     });

// //   while (tbody.firstChild) {
// //     tbody.removeChild(tbody.firstChild);
// //   }

// //   sortedRows.forEach(row => tbody.appendChild(row));

// //   if (sortDirection === 1) {
// //     table.setAttribute("data-sort-direction", "asc");
// //   } else {
// //     table.setAttribute("data-sort-direction", "desc");
// //   }
// // }

// function sortTable(columnIndex) {
//   const table = document.getElementById("jsonTable");
//   const tbody = table.getElementsByTagName("tbody")[0];
//   const rows = tbody.getElementsByTagName("tr");
//   const sortDirection =
//     table.getAttribute("data-sort-direction") === "asc" ? -1 : 1;

//   const sortedRows = Array.from(rows).sort((rowA, rowB) => {
//     const cellA = rowA.getElementsByTagName("td")[columnIndex];
//     const cellB = rowB.getElementsByTagName("td")[columnIndex];

//     let valueA = cellA.textContent.trim();
//     let valueB = cellB.textContent.trim();

//     if (valueA === "-") {
//       valueA = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueB === "-") {
//       valueB = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueA === "") {
//       valueA = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueB === "") {
//       valueB = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueA < valueB) {
//       return -1 * sortDirection;
//     } else if (valueA > valueB) {
//       return 1 * sortDirection;
//     } else {
//       return 0;
//     }
//   });

//   while (tbody.firstChild) {
//     tbody.removeChild(tbody.firstChild);
//   }

//   sortedRows.forEach((row) => tbody.appendChild(row));

//   if (sortDirection === 1) {
//     table.setAttribute("data-sort-direction", "asc");
//   } else {
//     table.setAttribute("data-sort-direction", "desc");
//   }
// }

// const loadData = (data, currentPage, resultsPerPage) => {
//   const table = document
//     .getElementById("jsonTable")
//     .getElementsByTagName("tbody")[0];
//   const searchInput = document.querySelector("[data-search]");
//   const searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term and convert to lowercase

//   // Filter the data array based on the search term
//   const filteredData = data.filter((hero) =>
//     hero.name.toLowerCase().includes(searchTerm)
//   );

//   // Calculate the range of data to display on the current page
//   const startIndex = (currentPage - 1) * resultsPerPage;
//   const endIndex = startIndex + resultsPerPage;
//   const pageData = filteredData.slice(startIndex, endIndex);

//   for (const hero of pageData) {
//     const row = table.insertRow();
//     const imageCell = row.insertCell();
//     const nameCell = row.insertCell();
//     const fullNameCell = row.insertCell();
//     const intelligenceCell = row.insertCell();
//     const strengthCell = row.insertCell();
//     const speedCell = row.insertCell();
//     const durabilityCell = row.insertCell();
//     const powerCell = row.insertCell();
//     const raceCell = row.insertCell();
//     const genderCell = row.insertCell();
//     const heightCell = row.insertCell();
//     const weightCell = row.insertCell();
//     const placeOfBirthCell = row.insertCell();
//     const alignmentCell = row.insertCell();

//     imageCell.innerHTML = `<img src="${hero.images.xs}" />`;
//     nameCell.innerHTML = hero.name;
//     fullNameCell.innerHTML = hero.biography.fullName;
//     intelligenceCell.innerHTML = hero.powerstats.intelligence;
//     strengthCell.innerHTML = hero.powerstats.strength;
//     speedCell.innerHTML = hero.powerstats.speed;
//     durabilityCell.innerHTML = hero.powerstats.durability;
//     powerCell.innerHTML = hero.powerstats.power;
//     raceCell.innerHTML = hero.appearance.race;
//     genderCell.innerHTML = hero.appearance.gender;
//     heightCell.innerHTML = hero.appearance.height;
//     weightCell.innerHTML = hero.appearance.weight;
//     placeOfBirthCell.innerHTML = hero.biography.placeOfBirth;
//     alignmentCell.innerHTML = hero.biography.alignment;
//   }
// };

// const url =
//   "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const searchInput = document.querySelector("[data-search]");
//     const resultsPerPageSelect = document.getElementById("results-per-page");
//     let currentPage = 1;
//     let resultsPerPage = parseInt(resultsPerPageSelect.value);

//     loadData(data, currentPage, resultsPerPage);

//     searchInput.addEventListener("input", () => {
//       const table = document
//         .getElementById("jsonTable")
//         .getElementsByTagName("tbody")[0];
//       table.innerHTML = ""; // Clear the table before loading filtered data
//       currentPage = 1;
//       loadData(data, currentPage, resultsPerPage); // Reload the table with the filtered data
//     });

//     //Results on Page
//     resultsPerPageSelect.addEventListener("change", () => {
//       const table = document
//         .getElementById("jsonTable")
//         .getElementsByTagName("tbody")[0];
//       table.innerHTML = ""; // Clear the table before reloading with new results per page
//       currentPage = 1;
//       resultsPerPage = parseInt(resultsPerPageSelect.value);
//       loadData(data, currentPage, resultsPerPage);
//     });
//   })
//   .catch((error) => console.error("Error:", error));

//   function sortTable(columnIndex) {
//   const table = document.getElementById("jsonTable");
//   const tbody = table.getElementsByTagName("tbody")[0];
//   const rows = tbody.getElementsByTagName("tr");
//   const sortDirection =
//     table.getAttribute("data-sort-direction") === "asc" ? -1 : 1;

//   const sortedRows = Array.from(rows).sort((rowA, rowB) => {
//     const cellA = rowA.getElementsByTagName("td")[columnIndex];
//     const cellB = rowB.getElementsByTagName("td")[columnIndex];

//     let valueA = cellA.textContent.trim();
//     let valueB = cellB.textContent.trim();

//     if (valueA === "-") {
//       valueA = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueB === "-") {
//       valueB = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueA === "") {
//       valueA = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueB === "") {
//       valueB = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueA < valueB) {
//       return -1 * sortDirection;
//     } else if (valueA > valueB) {
//       return 1 * sortDirection;
//     } else {
//       return 0;
//     }
//   });

//   while (tbody.firstChild) {
//     tbody.removeChild(tbody.firstChild);
//   }

//   sortedRows.forEach((row) => tbody.appendChild(row));

//   if (sortDirection === 1) {
//     table.setAttribute("data-sort-direction", "asc");
//   } else {
//     table.setAttribute("data-sort-direction", "desc");
//   }
// }

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
    hero.name.toLowerCase().includes(searchTerm)
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
        hero.name.toLowerCase().includes(searchTerm)
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

// This function sorts the table by the selected column
// function sortTable(columnIndex) {
//   const table = document.getElementById("jsonTable"); // Get the table element by its ID
//   const tbody = table.getElementsByTagName("tbody")[0]; // Get the first tbody element of the table
//   const rows = tbody.getElementsByTagName("tr"); // Get all the rows of the tbody
//   const sortDirection = // Set the sort direction to either ascending or descending, depending on the current value of the data-sort-direction attribute
//     table.getAttribute("data-sort-direction") === "asc" ? -1 : 1;

//   const sortedRows = Array.from(rows).sort((rowA, rowB) => {
//     // Sort the rows based on the value of the selected column
//     const cellA = rowA.getElementsByTagName("td")[columnIndex]; // Get the selected cell in rowA
//     const cellB = rowB.getElementsByTagName("td")[columnIndex]; // Get the selected cell in rowB

//     let valueA = cellA.textContent.trim(); // Get the text content of cellA and remove any leading/trailing whitespace
//     let valueB = cellB.textContent.trim(); // Get the text content of cellB and remove any leading/trailing whitespace

//     // These if statements handle sorting of cells that contain "-" or "" values
//     if (valueA.includes("-")) {
//       // If cellA contains "-"
//       valueA = sortDirection === 1 ? "\uffff" : ""; // Set valueA to "\uffff" if sortDirection is ascending, or to "" if sortDirection is descending
//     }

//     if (valueB.includes("-")) {
//       // If cellB contains "-"
//       valueB = sortDirection === 1 ? "\uffff" : ""; // Set valueB to "\uffff" if sortDirection is ascending, or to "" if sortDirection is descending
//     }

//     if (valueA === "") {
//       // If cellA is empty
//       valueA = sortDirection === 1 ? "\uffff" : ""; // Set valueA to "\uffff" if sortDirection is ascending, or to "" if
//     }

//     if (valueB === "") {
//       // If cellB is empty
//       valueB = sortDirection === 1 ? "\uffff" : "";
//     }

//     if (valueA < valueB) {
//       return -1 * sortDirection;
//     } else if (valueA > valueB) {
//       return 1 * sortDirection;
//     } else {
//       return 0;
//     }
//   });

//   // Remove all the rows from the table body
//   while (tbody.firstChild) {
//     tbody.removeChild(tbody.firstChild);
//   }

//   // Append each row of the sorted rows to the table body
//   sortedRows.forEach((row) => tbody.appendChild(row));

//   // Set the sort direction attribute of the table to either "asc" or "desc"
//   if (sortDirection === 1) {
//     table.setAttribute("data-sort-direction", "asc");
//   } else {
//     table.setAttribute("data-sort-direction", "desc");
//   }
// }
// it wasn't sorting the numbers correctly e.g. 100 and one digit numbers

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

    if (!isNaN(valueA) && !isNaN(valueB)) {
      valueA = parseFloat(valueA);
      valueB = parseFloat(valueB);
    } else if (valueA.includes("-")) {
      valueA = sortDirection === 1 ? "\uffff" : "";
    } else if (valueB.includes("-")) {
      valueB = sortDirection === 1 ? "\uffff" : "";
    }

    // if (valueA === "-") {
    //   valueA = sortDirection === 1 ? "\uffff" : "";
    // }

    // if (valueB === "-") {
    //   valueB = sortDirection === 1 ? "\uffff" : "";
    // }

    if (valueA === "") {
      valueA = sortDirection === 1 ? "\uffff" : "";
    }

    if (valueB === "") {
      valueB = sortDirection === 1 ? "\uffff" : "";
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
