# Welcome to E-Commerce Angular Project 🛍️

Welcome to the E-Commerce Angular project! This project aims to build a sleek and modern e-commerce platform using Angular. It's still under construction!

## 📜 Description

E-Commerce Angular Project is a full-fledged e-commerce solution designed to provide users with a seamless shopping experience. From product discovery to checkout, our goal is to create a user-friendly interface backed by robust functionality.

## 🚀 Features

- **Product Listing**: Browse through a wide range of products.
- **Search & Filter**: Find products quickly using the search bar.
- **User Authentication**: In this Angular project, we utilize JSON Web Tokens (JWT) for secure authentication and authorization purposes.
- **Shopping Cart**: Add products to the cart and manage them before proceeding to checkout.
- **Checkout Process**: Smooth and intuitive checkout process.

## 🔒 JWT Token Implementation

### Authentication Flow

1. **User Authentication**: When a user logs in to our application, their credentials are validated against our backend authentication service.
2. **Token Generation**: Upon successful authentication, the server generates a JWT token containing user information and necessary claims.
3. **Token Issuance**: The generated JWT token is issued to the client-side application.
4. **Token Storage**: The client-side application stores the JWT token securely, typically in local storage or session storage.
5. **Token Transmission**: For subsequent requests to protected resources, the client includes the JWT token in the request headers.

### Token Verification

1. **Authorization Middleware**: Our backend services are equipped with middleware to verify the authenticity and integrity of incoming JWT tokens.
2. **Token Decoding**: Upon receiving a request with a JWT token, the server decodes the token to extract user information and validate its signature.
3. **Authorization Checks**: Based on the decoded token's claims, the server performs authorization checks to ensure that the user has appropriate permissions for the requested resource.

### Benefits of JWT Tokens

- **Stateless Authentication**: JWT tokens enable stateless authentication, eliminating the need to store session state on the server-side.
- **Scalability**: With stateless authentication, our application can easily scale horizontally since any server can validate JWT tokens without relying on centralized session management.
- **Security**: JWT tokens are digitally signed, ensuring data integrity and preventing tampering. Additionally, they can be encrypted for added security.

## 🛠️ Installation

To get started with E-Commerce Angular Project, follow these simple steps:

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/Stavromir/E-Commerce.git
    ```

2. Navigate to the project directory:

    ```bash
    cd E-Commerce
    ```

3. Install dependencies using npm:

    ```bash
    npm install
    ```

## ▶️ Usage

To run the project locally, use the following command:

```bash
ng serve

