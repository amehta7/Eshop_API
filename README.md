#### Eshop_App_Backend - Using Node.js and MongoDB

#### Connect To DB

1. get connection string from MongoDB
2. setup .env with MONGO Database users credentials and assign the value
3. Update the same in <username>:<password> field in db -> index.js in connection string with correct value

#### Installation

To run this project, install it locally using npm:

$ npm install
$ npm run dev

#### Models/Database Schema

There are 3 models:

1. User
2. Address
3. Order
4. Product

#### Routes

1. ### http://localhost:3000/ : home route

2. ### /api/v1 : User(auth) Routes

## Route: ('/users') - signUpUser - sign up user

- Request : post(/api/v1/users) - sign up user

## Route: ('/auth') - login - login user/admin

- Request : post(/api/v1/auth) - login user

3. ### /api/v1/addresses : Address Route

## Route: ('/') - Add Address

- Request : post(/api/v1/addresses) - add address

4. ### /api/v1/products : Product Routes

## Route: ('/') -

# Search Product

- Request : get(/api/v1/products) - get all products
- Request : get(/api/v1/products?sort=fieldname) - sort by any field and by default sort by id
- Request : get(/api/v1/products?category=Automotive) - search by category
- Request : get(/api/v1/products?name=chair) - search by name

# saveProduct/addProduct - add a new product

- Request : post(/api/v1/products) - create a new product

## Route: ('/categories') - Get Product Categories

- Request : get(/api/v1/products/categories) - get product categories

## Route: ('/:id') -

# getProductById - get a product by id

- Request : get(/api/v1/products/63a249d43246cd4eb4a02c81) - get product by its id

# updateProductById - update a product by id

- Request : put(/api/v1/products/63a249d43246cd4eb4a02c81) - Update Product Details by its id

# deleteProductById - delete a product by id

- Request : delete(/api/v1/products/63a249d43246cd4eb4a02c81) - delete product by its id

5. ### /api/v1/orders : Order Route

## Route: ('/') - Create Order

- Request : post(/api/v1/orders) - create order
