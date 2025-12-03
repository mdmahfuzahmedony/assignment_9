import { useState, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthContext/AuthContext";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify"; // ✅ Toastify import

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const emailRef = useRef(null);
  const navigate = useNavigate();

  // 👁 Password toggle
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  // 📩 Email/Password Login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then(() => {
        toast.success("🎉 Login successful!");
        navigate("/home");
      })
      .catch((err) => toast.error(`❌ ${err.message}`));
  };

  // 🔑 Google Login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(() => {
        toast.success("🎉 Logged in with Google!");
        navigate("/home");
      })
      .catch((err) => toast.error(`❌ ${err.message}`));
  };

 
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      toast.warn("Please enter your email first!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => toast.info("📧 Check your email to reset password!"))
      .catch((err) => toast.error(`❌ ${err.message}`));
  };

  return (
    <div className="max-w-[1400px] mx-auto flex justify-center items-center my-20">
      <div>
        <form onSubmit={handleLogin}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 py-10">
            <div className="text-center font-bold text-blue-700 text-[30px]">
              Login
            </div>

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input input-bordered w-full"
              name="email"
              ref={emailRef}
              placeholder="Email"
              required
            />

            {/* Password */}
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
                onClick={handleTogglePassword}
                className="absolute top-3 right-3"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Forget Password */}
            <button
              type="button"
              onClick={handleForgetPassword}
              className="text-left my-2 underline text-blue-500"
            >
              Forget Password?
            </button>

            {/* Login Button */}
            <button
              type="submit"
              className="btn bg-blue-500 text-white mt-4 w-full"
            >
              Login
            </button>

            {/* Google Login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-outline border-none mt-4 w-full flex items-center justify-center gap-2"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </fieldset>
        </form>

        <p className="mt-4 text-center">
          New to our website?{" "}
          <Link to={"/register"} className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
