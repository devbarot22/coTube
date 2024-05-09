// Signup.tsx
import * as Assets from "../assets/Assets";
import { useEffect, useState } from "react";
import "./LandCss.css";
import axios from "axios";
import { FiEyeOff, FiEye } from "react-icons/fi";

const Signup = ({ closeSignup }: { closeSignup: any }) => {
  const [isYoutuber, setIsYoutuber] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passcordMatchingError, setPasscordMatchingError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword] = useState(false);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const handleToggle = () => {
    setIsYoutuber(!isYoutuber);
  };

  const checkPasswords = () => {
    if (password !== confirmPassword) {
      setPasscordMatchingError("Your passwords don't match");
    } else {
      setPasscordMatchingError("");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    checkPasswords();
    if (password === confirmPassword) {
      setPasscordMatchingError("");
      const formData = new FormData(event.currentTarget as HTMLFormElement);
      const username = formData?.get("username");
      const email = formData?.get("email");
      const password = formData?.get("password");
      const confirmPassword = formData?.get("confirmPassword");

      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/user/register",
          {
            username,
            email,
            password,
            confirmPassword,
            role: isYoutuber ? "youtuber" : "editor",
          }
        );

        if (response.status === 200) {
          console.log("Registration successful!");
          console.log("Server response:", response.data);
        } else {
          console.log("Unexpected status code:", response.status);
        }
      } catch (error) {
        console.log("Registration error:", error);
      }
    }
  };

  let showstyle = {
    type: "password",
  };

  if (showPassword || showConfirmPassword) {
    showstyle = {
      type: "text",
    };
  }
  let eyevisiblity = password === "" ? "hidden" : "visible";
  return (
    <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-10 relative w-[28vw]">
        <button onClick={closeSignup} className="absolute top-0 right-2">
          <img src={Assets.CancelIcon} alt="" className="h-4 w-5 mt-2 mr-1" />
        </button>
        <h2 className="text-2xl mb-4 text-center">Signup</h2>
        <div className="flex items-center justify-center mb-4 mr-6">
          <span className="mr-2 text-lg">YouTuber</span>
          <input
            type="checkbox"
            className="sr-only"
            id="darkmode-toggle"
            checked={isYoutuber}
            onChange={handleToggle}
          />
          <label htmlFor="darkmode-toggle" className="toggle">
            <span></span>
          </label>
          <span className="ml-2 text-lg">Editor</span>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Username</label>
          <input
            type="text"
            name="username"
            className="border-b-2 border-gray-400 p-2 text-lg mb-4 w-full focus:border-black outline-none"
          />
          <label className="block mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="border-b-2 border-gray-400 p-2 text-lg mb-4 w-full focus:border-black outline-none"
          />

          <div className="relative">
            <label className="block mb-2">Password</label>
            <input
              type={showstyle.type}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2  border-gray-400 focus:border-black p-2 mb-4 w-full outline-none"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-5 top-1/2 cursor-pointer ${eyevisiblity}`}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          <label className="block mb-2">Confirm Password</label>
          <input
            type={showstyle.type}
            name="confirmPassword"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              if (passcordMatchingError) {
                setPasscordMatchingError("");
              }
            }}
            className="border-b-2 border-gray-400 focus:border-black p-2 mb-1 w-full outline-none"
          />

          <div
            style={{
              opacity: passcordMatchingError ? 1 : 0,
              minHeight: "20px",
              color: "red",
              font: ""
            }}>
            {passcordMatchingError}
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white p-2 mt-2 rounded">
            Signup
          </button>
        </form>
        <p className="text-xs"><span className="text-gray-700">By creating an account, I accept the </span><a href="#">Terms & Conditions & Privacy Policy</a></p>
      </div>
    </div>
  );
};

export default Signup;
