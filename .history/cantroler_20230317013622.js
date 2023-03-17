import {state, loadDatas} from './model.js'
import  {renderHerosView, resultsPerPageHandlerView, PaginationBtnsHandlers, sortHandler, searchViewHandler}     from './view.js'


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

const controlLoadData = async ()=> {
  try{
   await loadDatas()
   renderHerosView(state.heros)
   console.log(state.heros.findIndex(el => el.name === ('Wolfsbane')))
  //  JSON.parse(JSON.stringify(arr))
   resultsPerPageHandlerView(JSON.parse(JSON.stringify(state.heros)).sort((a, b)=> a.name.toLowerCase().localeCompare( b.name.toLowerCase())), renderHerosView )
   PaginationBtnsHandlers(state.heros , renderHerosView  )
   sortHandler(state.heros , renderHerosView)
   searchViewHandler(state.heros, renderHerosView)
  }catch(er){
   console.log(er)
  }

}

// TimeRanges()



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

//   // Clear the table before loading new data
//   table.innerHTML = "";

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
//     let filteredData = data;
//     const prevButton = document.getElementById("previous-button");
//     const nextButton = document.getElementById("next-button");

//     loadData(data, currentPage, resultsPerPage);
    
//     // Search on Page
//     searchInput.addEventListener("input", () => {
//       currentPage = 1;
//       const searchTerm = searchInput.value.trim().toLowerCase();
//       filteredData = data.filter((hero) =>
//         hero.name.toLowerCase().includes(searchTerm)
//       );
//       loadData(filteredData, currentPage, resultsPerPage);
//     });

//     //Results on Page
//     // resultsPerPageSelect.addEventListener("change", () => {
//     //   currentPage = 1;
//     //   resultsPerPage = parseInt(resultsPerPageSelect.value);
//     //   loadData(filteredData, currentPage, resultsPerPage);
//     // });
//     resultsPerPageSelect.addEventListener("change", () => {
//       currentPage = 1;
//       const selectedValue = resultsPerPageSelect.value;
//       resultsPerPage = selectedValue === "All" ? filteredData.length : parseInt(selectedValue);
//       loadData(filteredData, currentPage, resultsPerPage);
//     });

//     // Previous button
//     prevButton.addEventListener("click", () => {
//       if (currentPage > 1) {
//         currentPage--;
//         loadData(filteredData, currentPage, resultsPerPage);
//       }
//     });

//     // Next button
//     nextButton.addEventListener("click", () => {
//       if (currentPage < filteredData.length / resultsPerPage) {
//         currentPage++;
//         loadData(filteredData, currentPage, resultsPerPage);
//       }
//     });
//   })
//   .catch((error) => console.error("Error:", error));







// function sortTable(columnIndex) {
//   // const table = document.getElementById("jsonTable");
//   // const tbody = table.getElementsByTagName("tbody")[0];
//   // const rows = tbody.getElementsByTagName("tr");
//   const sortDirection = table.getAttribute("data-sort-direction") === "asc" ? -1 : 1;

//   const sortedRows = Array.from(rows).sort((rowA, rowB) => {
//     const cellA = rowA.getElementsByTagName("td")[columnIndex];
//     const cellB = rowB.getElementsByTagName("td")[columnIndex];

//     let valueA = cellA.textContent.trim();
//     let valueB = cellB.textContent.trim();

//     // if (valueA === "-") {
//     //   valueA = sortDirection === 1 ? "\uffff" : "";
//     // }
//     if (valueA.includes("-")) {
//       valueA = sortDirection === 1 ? "\uffff" : "";
//     }

//     // if (valueB === "-") {
//     //   valueB = sortDirection === 1 ? "\uffff" : "";
//     // }

//     if (valueB.includes("-")) {
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

//   // while (tbody.firstChild) {
//   //   tbody.removeChild(tbody.firstChild);
//   // }

//   // sortedRows.forEach((row) => tbody.appendChild(row));

//   if (sortDirection === 1) {
//     table.setAttribute("data-sort-direction", "asc");
//   } else {
//     table.setAttribute("data-sort-direction", "desc");
//   }



// }

// // console.log(await loadDatas(), state.data)


(()=>{

  controlLoadData()

})()