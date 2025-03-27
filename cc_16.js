// Task 2
// Function to fetch products using .then()
function fetchProductsThen() {

    const url = 'https://www.course-api.com/javascript-store-products';
    
    // Fetch data using fetch() API
    fetch(url)
      .then(response => {

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
      
        data.forEach(product => {
          console.log(product.fields.name);
        });
      })
      .catch(error => {
        // Catch and log any errors
        console.error('There was a problem with the fetch operation:', error);
      });
  }
  
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
      displayProducts(products); 
    } catch (error) {
      handleError(error); 
    }
  }
  
  function displayProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products entries 
  
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
  
      productList.appendChild(productItem); // Adding product item to the product list
    });
  }
  
  function handleError(error) {
    console.error('Error:', error);
    alert('There was an error fetching the products. Please try again later.');
  }
  
  fetchProductsAsync();

  // Task 4 
  // Function to display products
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Clear any previous products
    
    // Loop through the first 5 products
    products.slice(0, 5).forEach(product => {
  
      const productItem = document.createElement('div');
      productItem.classList.add('product-item');
      
      const productImage = document.createElement('img');
      productImage.src = product.imageUrl;
      productImage.alt = product.name;
      productItem.appendChild(productImage);
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productItem.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = `$${product.price.toFixed(2)}`; 
      productItem.appendChild(productPrice);
  
      productContainer.appendChild(productItem);
    });
  }

  // Task 5 
  // Function to handle errors
function handleError(error) {
    console.error('An error occurred: ', error?.message || error); // Log the error message
  }

  // Task 6
  // Call both fetch functions to bring the products to life!
fetchProductsThen();
fetchProductsAsync();