# 🧸 **Assignment_nine – Kids Toy Store Platform**

---

## 🌍 **Live Demo**

🔗 **[https://assingmentnine.pages.dev](https://assingmentnine.pages.dev)**
project overview: https://i.ibb.co.com/h1rCpBLN/image.png
  

---

## 📌 **Project Overview**

**Assignment_nine** is a complete kids' toy store web platform where users can browse, filter, rate, and purchase toys. The project includes Firebase authentication, Firestore integration, protected routes, and a responsive UI designed with Tailwind CSS and DaisyUI.

---

## 🚀 **Key Features**

### 🔹 **Toy Listing System**

Users can browse all toys with details such as image, price, rating, and category.

### 🔹 **Category-Based Filtering**

Filter toys by categories or types for easy navigation.

### 🔹 **User Authentication**

* Email/Password Login
* Google Sign-In
* Firebase Authentication

### 🔹 **Rating System**

Users can add ratings. Updated ratings are stored and fetched from Firebase Firestore.

### 🔹 **Add to Cart**

Add toys to your cart for future purchase.

### 🔹 **Toy Details Page**

Includes:

* Toy Name
* Description
* Price
* Seller Info
* Quantity
* Rating

### 🔹 **Responsive UI**

Fully mobile-friendly using **Tailwind CSS + DaisyUI**.

### 🔹 **Protected Routes**

Certain pages are restricted and require authentication.

### 🔹 **Firebase Firestore**

All toy data is stored, updated, and fetched from Firestore.

---

## 📦 **Technologies & NPM Packages Used**

### 🖥️ **Frontend**

* React.js
* Tailwind CSS
* DaisyUI

### 📦 **NPM Packages**

| Package            | Purpose                           |
| ------------------ | --------------------------------- |
| **swiper**         | Slider for banners & toy showcase |
| **react-toastify** | Notifications                     |
| **react-icon**     | Icon collection                   |
| **axios**          | API handling                      |
| **lucide-react**   | Clean modern icons                |
| **tailwindcss**    | Styling                           |
| **daisyui**        | UI components                     |

---

## 🛠️ **How to Run the Project Locally**

### **1️⃣ Clone the Repository**

```bash
git clone https://github.com/your-username/Assignment_nine.git
```

### **2️⃣ Enter the Project Folder**

```bash
cd Assignment_nine
```

### **3️⃣ Install Dependencies**

```bash
npm install
```

---

## 🔥 **4️⃣ Create Firebase Config File**

Create a file:

```
src/firebase.config.js
```

Paste your Firebase config:

```js
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
```

---

## 🎉 **Your Kids Toy Store Platform Is Ready!**

You can now start the development server:

```bash
npm run dev
```

✨ Enjoy smooth browsing, filtering, and toy shopping experience with Assignment_nine!
