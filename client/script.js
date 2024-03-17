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
      console.log(responseData);
    } else {
      console.error('Error:', response.status);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
