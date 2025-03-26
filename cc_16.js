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

  // Task 3
  // Function to fetch products using async/await
async function fetchProductsAsync() {
    const url = 'https://www.course-api.com/javascript-store-products';
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const products = await response.json();
      displayProducts(products); // Call the helper function to display products
    } catch (error) {
      handleError(error); // Pass error to handleError function
    }
  }
  
  // Helper function to display products on the page
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products
  
    products.forEach(product => {
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      
      const productImage = document.createElement('img');
      productImage.src = product.imageUrl;
      productItem.appendChild(productImage);
      
      const productTitle = document.createElement('h3');
      productTitle.textContent = product.name;
      productItem.appendChild(productTitle);
      
      const productDescription = document.createElement('p');
      productDescription.textContent = product.description;
      productItem.appendChild(productDescription);
  
      productList.appendChild(productItem); // Add the product item to the product list
    });
  }
  
  // Function to handle errors
  function handleError(error) {
    console.error('Error:', error);
    alert('There was an error fetching the products. Please try again later.');
  }
  
  // Call the function when the page loads
  fetchProductsAsync();

  // Task 4 
  // Function to display products (first 5 products)
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any previous products
    
    // Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
      // Create product element
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      
      // Product image
      const productImage = document.createElement('img');
      productImage.src = product.imageUrl;
      productImage.alt = product.name;
      productItem.appendChild(productImage);
  
      // Product name
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productItem.appendChild(productName);
  
      // Product price
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price.toFixed(2)}`; // Assuming price is a number
      productItem.appendChild(productPrice);
  
      // Append product to container
      productContainer.appendChild(productItem);
    });
  }

  // Task 5 
  // Function to handle errors
function handleError(error) {
    console.error('An error occurred: ', error.message); // Log the error message
  }