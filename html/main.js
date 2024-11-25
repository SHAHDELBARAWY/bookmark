// Global Variables
var bookmarkNameInput = document.getElementById("bookmarkName");
var bookmarkURLInput  = document.getElementById("bookmarkURL");
var submitBtnInput   = document.getElementById("submitBtn");

var currentIndex = 0; // Index of the product being updated
var productList = [];


/////////////////////////////
if (localStorage.getItem("bookmarkContainer") !== null) {
    productList = JSON.parse(localStorage.getItem("bookmarkContainer")); // Load products into the list
    displayData(); // Display product data on the page
  }

/////////////////////////////////

function addProduct() {
    if (validationName() && validationURL() ) {
      var product = {
        name: bookmarkNameInputNameInput.value.trim(), // Trim the input value for product name
        URL: bookmarkURLInput.trim(), // Get the product price
      };
  
      productList.push(product); // Add the new product to the product list
  
      // Save the updated product list to localStorage
      localStorage.setItem("bookmarkContainer", JSON.stringify(productList));
  
      displayData(); // Display updated product data
  
      clearForm(); // Clear the form fields
    }
  }
//////////////////////////////////////
function displayData() {
    var cartona = "";
    for (var i = 0; i < productList.length; i++) {
      cartona += createCols(i); // Generate HTML content for each product
    }
  
    document.getElementById("rowData").innerHTML = cartona; // Inject the generated HTML into the page
  }
  ////////////////////////////////////
  function createCols(i) {
return `
<tbody id="tableContent">
                <tr> 
                    <td>1</td>
                    <td>Jjjjjj</td>
                    <td>
                        <button class="btn btn-visit" data-index="0">
                            <i class="fa-solid fa-eye pe-2"></i>
                            "Visit "
                        </button>
                    </td>
                    <td>
                        <button class="btn btn-delete pe-2" data-index="0">
                            <i class="fa-solid fa-trash-can"></i>
                            " Delete "
                        </button>
                    </td>
                </tr>
               
             </tbody>
       `;
}

/////////////////////////////////////////////
function deleteItem(index) {
    productList.splice(index, 1);
      // Save the updated list to localStorage
  localStorage.setItem("bookmarkContainer", JSON.stringify(productList));

  displayData(); // Refresh the displayed product data
}

//////////////////////////////////////////
function clearForm() {
    bookmarkNameInput.value = null;
    bookmarkURLInput.value = null;

    bookmarkNameInput.classList.remove("is-valid");
    bookmarkURLInput.classList.remove("is-valid");

}
///////////////////////////////////////////////
bookmarkNameInput.value = productList[index].name;
bookmarkURLInput.value = productList[index].price;


/////////////////////////////////////////////////
function validationName() {
    var regex = /^[a-zA-Z][a-zA-Z0-9 _-]{2,19}$/; // Regex to validate product name
    var text = bookmarkNameInput.value;
    var msgName = document.getElementById("msgName");
  
    if (regex.test(text)) {
      // Valid input
      bookmarkNameInput.classList.add("is-valid");
      bookmarkNameInput.classList.remove("is-invalid");
      msgName.classList.add("d-none");
      return true;
    } else {
      // Invalid input
      bookmarkNameInput.classList.add("is-invalid");
      bookmarkNameInput.classList.remove("is-valid");
      msgName.classList.remove("d-none");
      return false;
    }
  }

  function validationURL() {
    var regex = /^\d{1,10}(\.\d{1,2})?$/; // Regex to validate product price
    var text = bookmarkURLInput.value;
    var msgURL = document.getElementById("msgURL");
  
    if (regex.test(text)) {
      // Valid input
      bookmarkURLInput.classList.add("is-valid");
      bookmarkURLInput.classList.remove("is-invalid");
      msgURL.classList.add("d-none");
      return true;
    } else {
      // Invalid input
      bookmarkURLInput.classList.add("is-invalid");
      bookmarkNameInput.classList.remove("is-valid");
      msgURL.classList.remove("d-none");
      return false;
    }
  }  

