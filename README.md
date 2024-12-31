# Netlify Link : https://iridescent-begonia-fa9e58.netlify.app/
# Price_Range_Filter
his project implements a price range filter feature that allows users to filter items based on their price within a given range. This feature is commonly used in e-commerce websites and product listing platforms to help users find products that fit their budget.

# Features:
Product Display: The application fetches product data from an API and displays each product with its image, title, price, and category.
Price Range Filters: Users can filter products by price range, including options such as "below $100," "$100 to $200," "$200 to $300," and more.
Dynamic Updates: When a filter is applied, the displayed products update dynamically, without needing to reload the page.

# Key Components:
Product Data Fetching: The app uses an asynchronous function to fetch data from a remote API.
Product Display: The fetched products are displayed dynamically on the page with images, titles, prices, and categories.
Price Filtering: The app allows users to filter the products based on selected price ranges. Once a filter is applied, the product list updates to show only the matching products.
Event Handling: The app listens for checkbox selections and a filter button click, updating the display based on the user’s selections.

# How It Works:
Fetching Product Data: When the page is loaded, an API request is made to fetch a list of products.
Displaying Products: The fetched product data is displayed on the page, showing product images, titles, prices, and categories.
Filtering: Users can select one or more checkboxes corresponding to different price ranges (e.g., below $100, $100–$200). When the "Filter" button is clicked, the product list updates to show only the products that match the selected price range(s).

# Technologies Used:
HTML for the structure of the page.
CSS for styling and layout (although minimal, can be enhanced as needed).
JavaScript for fetching data from the API, handling user interactions, and dynamically updating the UI.

# How to Use:
Open the index.html file in a web browser.
The product list will be fetched from the API and displayed.
Use the checkboxes to filter products by price.
Click the "Filter" button to apply the selected filters and update the product list.

# Potential Improvements:
Styling: Add more CSS for a better user interface and responsiveness.
Additional Filters: Add more filtering options like category, rating, etc.
Pagination: Implement pagination to handle large product lists.
Error Handling: Add error handling for failed API requests.
