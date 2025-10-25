import React, { useState, useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify"; // ✅ import Toast

const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formHandle = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.PhotoURL.value;
    const checkbox = e.target.terms.checked;

    // ✅ Password validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      toast.error(
        "❌ Password must have at least one uppercase, one lowercase & 6 characters!"
      );
      return;
    }

    if (!checkbox) {
      toast.warn("⚠️ Please accept the terms and conditions!");
      return;
    }

    // ✅ Create user in Firebase
    createUser(email, password, name, photoURL)
      .then(() => {
        toast.success("🎉 Account Created Successfully!");
        navigate("/login");
      })
      .catch((err) => {
        toast.error(`❌ ${err.message}`);
      });
  };

  // ✅ Google Login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("🎉 Google Login Successful!");
        navigate("/home");
      })
      .catch((err) => {
        toast.error(`❌ ${err.message}`);
      });
  };

  return (
    <div className="max-w-[1400px] mx-auto my-10">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Register <span className="text-blue-700">now!</span>
            </h1>
            <p className="py-6">
              Create your account and start exploring all our toys.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <div className="card-body">
              <form onSubmit={formHandle}>
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="name"
                  placeholder="Your Name"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  className="input input-bordered"
                  name="email"
                  placeholder="Email"
                  required
                />

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input input-bordered"
                  name="PhotoURL"
                  placeholder="Photo URL"
                  required
                />

                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setShowPassword(!showPassword);
                    }}
                    className="absolute top-3 right-5"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>

                <label className="label mt-2 flex items-center gap-2">
                  <input type="checkbox" className="checkbox" name="terms" />
                  Accept terms and conditions
                </label>

                <button className="btn bg-blue-500 text-white w-full mt-4">
                  Register
                </button>
              </form>

              <button
                onClick={handleGoogleLogin}
                className="btn btn-outline mt-4 w-full flex items-center justify-center gap-2"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Continue with Google
              </button>

              <p className="mt-4">
                Already have an account?{" "}
                <Link to={"/login"} className="text-blue-500 underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
