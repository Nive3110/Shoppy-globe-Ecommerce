# ShoppyGlobe – E-commerce Application

ShoppyGlobe is a basic e-commerce web application built using React and Vite.  
The application allows users to browse products, view product details, add items to a cart, and place an order using a simple checkout flow.

---

## 🚀 Tech Stack

- React (with Vite)
- Redux Toolkit
- React Router DOM (CreateBrowserRouter)
- Tailwind CSS
- DummyJSON API

---

## 📦 Features

- Product listing fetched from API
- Product detail page with dynamic routing
- Add to cart and remove from cart functionality
- Cart item quantity management
- Checkout form with order summary
- Order placement with automatic redirection
- Redux-based state management
- Lazy loading and code splitting
- Responsive design for mobile and desktop
- Custom 404 (Not Found) page

---

## 🧩 Component Structure

- App (Main layout component)
- Header (Navigation and cart icon)
- ProductList (Displays list of products)
- ProductItem (Single product card)
- ProductDetail (Detailed product view)
- Cart (Shopping cart page)
- CartItem (Individual cart item)
- Checkout (Dummy checkout form)
- NotFound (404 error page)

---

## 🔄 Data Fetching

- Products are fetched from:  
  https://dummyjson.com/products
- Custom hooks are used for fetching product lists and product details.
- Proper loading and error handling is implemented.

---

## 🛒 State Management

- Redux Toolkit is used to manage cart state.
- Actions include add to cart, remove from cart, update quantity, and clear cart.
- Cart state persists using localStorage.

---

## 🧭 Routing

- Implemented using `createBrowserRouter`
- Routes include:
  - Home
  - Products
  - Product Detail (dynamic route)
  - Cart
  - Checkout
  - Order Success
  - 404 Not Found

---

## ⚡ Performance Optimizations

- Components are lazy loaded using `React.lazy` and `Suspense`
- Images are lazy loaded using the `loading="lazy"` attribute

---

## 🎨 Styling

- Tailwind CSS is used for styling
- Fully responsive design
- Mobile-first layout approach

---

## ▶️ How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/Nive3110/Shoppy-globe-Ecommerce.git

2.cd Shoppyglobe
3.npm i
4.npm run dev