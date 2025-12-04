import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const MyProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  // Page Title
  useEffect(() => {
    document.title = "My Dashboard | ToyStore";
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile(name, photo)
      .then(() => alert("✅ Profile updated successfully!"))
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-gray-800 py-10 px-4 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Greeting */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">My Dashboard</h1>
          <p className="text-gray-500">Welcome back, manage your profile and settings here.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* ----- Left Side: Profile Card ----- */}
          <div className="lg:col-span-1">
            <div className="bg-base-200 rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
              
              {/* Decorative Cover Background */}
              <div className="h-32 bg-gradient-to-r from-purple-500 to-indigo-600"></div>

              <div className="px-6 pb-8 relative text-center">
                {/* Profile Image */}
                <div className="relative -mt-16 inline-block">
                  <img
                    src={user?.photoURL || "https://i.ibb.co/2d3K3Qv/default.png"}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover bg-white"
                  />
                  {/* Active Status Dot */}
                  <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                </div>

                {/* User Info */}
                <h2 className="text-2xl font-bold text-gray-800 mt-3">
                  {user?.displayName || "User Name"}
                </h2>
                <p className="text-sm text-gray-500 mb-4">{user?.email}</p>
                
                <div className="inline-block px-4 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-full border border-purple-100">
                  Toy Enthusiast
                </div>

                {/* Dummy Stats (Dashboard Feel) */}
                <div className="grid grid-cols-2 gap-4 mt-6 border-t pt-6">
                  <div>
                    <span className="block text-xl font-bold text-gray-800">12</span>
                    <span className="text-xs text-gray-500">Orders</span>
                  </div>
                  <div>
                    <span className="block text-xl font-bold text-gray-800">05</span>
                    <span className="text-xs text-gray-500">Wishlist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----- Right Side: Edit Form ----- */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
                Update Profile Information
              </h3>

              <form onSubmit={handleUpdate} className="space-y-6">
                
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                </div>

                {/* Photo URL Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Photo URL
                  </label>
                  <input
                    type="text"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-200"
                  />
                  <p className="text-xs text-gray-400 mt-2">
                    Paste a direct image link to update your avatar.
                  </p>
                </div>

                {/* Email (Read Only) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="text"
                    value={user?.email}
                    disabled
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1"
                  >
                    Save Changes
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;