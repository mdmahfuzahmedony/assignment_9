🧸 Assignment_nine
A Local Kids Toy Store Platform

Live Demo: https://assingmentnine.pages.dev

📌 Project Overview

Assignment_nine is a complete kids' toy store web platform where users can browse, filter, rate, and purchase toys. The project includes Firebase authentication, Firestore integration, protected routes, responsive UI, and a smooth user experience.

🚀 Key Features
🔹 Toy Listing System

Browse all toys with full details including image, price, rating, and category.

🔹 Category-Based Filtering

Users can quickly filter toys by categories or types for easy navigation.

🔹 User Authentication

Login & Registration using

Email/Password

Google Sign-In
Using Firebase Authentication.

🔹 Rating System

Users can add ratings. Updated ratings stored and fetched from Firebase Firestore.

🔹 Add to Cart

Add toys to cart for later purchase.

🔹 Toy Details Page

Full details including:

Toy name

Description

Price

Seller info

Quantity

Rating

🔹 Responsive UI

Full mobile-friendly design using Tailwind CSS + DaisyUI.

🔹 Protected Routes

Only authenticated users can access certain features/pages.

🔹 Firebase Firestore

All toy data is stored, updated, and fetched from Firestore.

📦 Technologies & NPM Packages Used
Frontend

React.js

Tailwind CSS

DaisyUI

NPM Packages
Package	Purpose
swiper	Slider for banners & toy showcase
react-toastify	Notifications
react-icon	Icon collection
axios	API handling
lucide-react	Clean modern icons
tailwindcss	Styling
daisyui	Pre-built UI components



🛠️ 📌 How to Run the Project Locally

Follow these steps to run Assignment_nine on your computer:

1️⃣ Clone the Repository
git clone https://github.com/your-username/Assignment_nine.git

2️⃣ Enter the Project Folder
cd Assignment_nine

3️⃣ Install Dependencies
npm install

4️⃣ Create Firebase Config File

Create:

src/firebase.config.js


Paste your Firebase configuration:

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export default app;
