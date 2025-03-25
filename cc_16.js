// Task 2
// Function to fetch products using .then()
function fetchProductsThen() {
    // URL to fetch data from
    const url = 'https://www.course-api.com/javascript-store-products';
    
    // Fetch data using fetch() API
    fetch(url)
      .then(response => {
        // Check if the response is okay (status 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON from response
      })
      .then(data => {
        // Log each product's name to the console
        data.forEach(product => {
          console.log(product.name);
        });
      })
      .catch(error => {
        // Catch and log any errors
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
  // Call the function when the page loads
  fetchProductsThen();