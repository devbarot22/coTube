import { useEffect, useState } from "react";
import * as Assets from "../assets/Assets";
import axios from "axios";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { useNavigate } from "react-router";

const Login = ({ closeLogin }: { closeLogin: any }) => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    const identifier = formData?.get("identifier");
    const password = formData?.get("password");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(String(identifier));
    const data = isEmail
      ? { email: identifier, password }
      : { username: identifier, password };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        data,
        { withCredentials: true }
      );

      console.log(response.data);


      const { accessToken } = response.data;

      // Set the access token in the cookies
      document.cookie = `AccessToken=${accessToken}; path=/`;

      if (response.status === 200) {
        console.log("Login successful!");
        const isYoutuber = response.data.data.user.role === "youtuber";
        navigate(isYoutuber ? "/Youtuber" : "/Editor");
      } else {
        console.log("Unexpected status code:", response.status);
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  let showstyle = {
    type: "password",
  };

  if (showPassword) {
    showstyle = {
      type: "text",
    };
  }

  let eyevisiblity = password === "" ? "hidden" : "visible";

  return (
    <div className="fixed top-0 z-50 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded p-10 relative w-[28vw]">
        <button onClick={closeLogin} className="absolute top-0 right-2">
          <img src={Assets.CancelIcon} alt="" className="h-4 w-5 mt-2 mr-1" />
        </button>
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Username or Email</label>
          <input
            type="text"
            name="identifier"
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="enter your username or email"
            className="border-b-2 border-gray-400 p-2 text-base mb-4 w-full focus:border-black outline-none"
          />
          <div className="relative">
            <label className="block mb-2">Password</label>
            <input
              type={showstyle.type}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="enter your password"
              className="border-b-2 border-gray-400 text-base focus:border-black p-2 mb-1 w-full outline-none"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className={`absolute right-5 top-1/2 cursor-pointer ${eyevisiblity}`}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>
          <a
            href="/forgot-password"
            className="text-gray-500 mb-3 w-fit p-0 block">
            Forgot Password?
          </a>
          <button
            type="submit"
            className="bg-blue-500 w-full text-white p-2 mt-4 rounded">
            Login
          </button>
          <p className="text-xs">
            <span className="text-gray-700">
              By clicking on login, I accept the{" "}
            </span>
            <a href="#">Terms & Conditions & Privacy Policy</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
