### Eshop API

- Designed a powerful and scalable back-end application using Node.js, Express.js, and MongoDB. This RESTful API is tailored for eCommerce purposes, featuring essential functionalities such as user authentication, address management, order creation, and comprehensive product management. The use of JWT (JSON Web Tokens) ensures secure authentication, making it a robust solution for powering eCommerce applications.
- Leveraging the capabilities of Node.js, Express.js, and MongoDB, I created a RESTful API that meets the demands of modern eCommerce applications. The incorporation of JWT ensures secure authentication, contributing to the overall security and reliability of the API.

#### Key Features:

- Express.js-Powered API: Developed a feature-rich eCommerce REST API using the Express.js framework, providing a solid foundation for handling HTTP requests efficiently.
- MongoDB Data Storage: Implemented MongoDB as the database solution, offering flexibility and scalability for storing user data, product information, addresses, and orders.
- User Authentication (JWT): Integrated JSON Web Tokens (JWT) for secure user authentication, allowing users to log in and sign up securely.
- User Profile Management: Features for user profile management, including adding addresses and maintaining a user's order history.
- Order Creation: Developed functionality for users to create orders, ensuring a smooth and intuitive eCommerce experience.
- Product Management: Admin-specific endpoints for adding, updating, and deleting products, providing comprehensive control over the product catalog.
- Search Product: Implemented search functionality for users to find products easily, enhancing the overall user experience.

#### Connect To DB

1. get connection string from MongoDB
2. setup .env with MONGO Database users credentials and assign the value
3. Update the same in <username>:<password> field in db -> index.js in connection string with correct value

#### Installation

To run this project, install it locally using npm:

$ npm install
$ npm run dev

