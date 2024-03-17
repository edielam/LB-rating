// Get the form element
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent the default form submission

  // Validate numerical inputs
  const ratingInput = document.querySelector('input[name="rating"]');
  const romInput = document.querySelector('input[name="rom"]');

  if (isNaN(ratingInput.value) || isNaN(romInput.value)) {
    // Handle invalid input (e.g., display error messages)
    console.error('Error: Invalid input detected.');
    return;
  }

  // If all inputs are valid, proceed with form submission
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch('http://127.0.0.1:5000/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const responseData = await response.json();

      // Store the response data in localStorage
      localStorage.setItem('phoneData', JSON.stringify(responseData));

      // Render the phone data on the page
      renderPhoneData(responseData);
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

// Function to render phone data on the page
function renderPhoneData(phoneData) {
  // Get the container for the grid
  const gridContainer = document.getElementById('phone-grid');

  // Clear existing content in the grid container
  gridContainer.innerHTML = '';

  // Iterate over the data and create HTML elements for each phone
  Object.keys(phoneData).forEach(phoneName => {
    const phone = phoneData[phoneName];

    // Create a card element for each phone
    const card = document.createElement('div');
    card.classList.add('card');

    // Create HTML content for the card
    card.innerHTML = `
      <img src="${phone.image}" alt="${phoneName}" class="phone-image">
      <div class="phone-details">
        <h2 class="phone-name">${phoneName}</h2>
        <p><strong>Processor:</strong> ${phone.processor}</p>
        <p><strong>RAM:</strong> ${phone.ram} GB</p>
        <p><strong>ROM:</strong> ${phone.rom} GB</p>
        <p><strong>Camera:</strong> ${phone.camera} MP</p>
        <p><strong>Battery:</strong> ${phone.battery} mAh</p>
        <p><strong>Rating:</strong> ${phone.rating}</p>
        <p><strong>Budget:</strong> Rs. ${phone.budget}</p>
      </div>
    `;

    // Append the card to the grid container
    gridContainer.appendChild(card);
  });
}

// Check if phone data exists in localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedPhoneData = localStorage.getItem('phoneData');
  if (storedPhoneData) {
    // If phone data exists, parse it and render it on the page
    renderPhoneData(JSON.parse(storedPhoneData));
  }
});
// Function to render phone data as a table on the page
function renderPhoneDataAsTable(phoneData) {
    // Get the container for the table
    const tableContainer = document.getElementById('phone-grid');

    // Clear existing content in the table container
    tableContainer.innerHTML = '';

    // Create the table element
    const table = document.createElement('table');
    table.classList.add('phone-table');

    // Create table header
    const tableHeader = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const headers = ['Name', 'Processor', 'RAM (GB)', 'ROM (GB)', 'Camera (MP)', 'Battery (mAh)', 'Rating', 'Budget (Rs)'];

    // Create header cells
    headers.forEach(headerText => {
      const headerCell = document.createElement('th');
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });

    // Append header row to table header
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    // Create table body
    const tableBody = document.createElement('tbody');

    // Iterate over the data and create table rows for each phone
    Object.keys(phoneData).forEach(phoneName => {
      const phone = phoneData[phoneName];

      // Create a table row for each phone
      const row = document.createElement('tr');

      // Populate table cells with phone data
      const rowData = [phoneName, phone.processor, phone.ram, phone.rom, phone.camera, phone.battery, phone.rating, phone.budget];

      // Create table cells for each data item
      rowData.forEach(data => {
        const cell = document.createElement('td');
        cell.textContent = data;
        row.appendChild(cell);
      });

      // Append row to table body
      tableBody.appendChild(row);
    });

    // Append table body to table
    table.appendChild(tableBody);

    // Append table to the table container
    tableContainer.appendChild(table);
}

// Call renderPhoneDataAsTable with stored phone data on page load
document.addEventListener('DOMContentLoaded', () => {
  const storedPhoneData = localStorage.getItem('phoneData');
  if (storedPhoneData) {
    renderPhoneDataAsTable(JSON.parse(storedPhoneData));
  }
});
