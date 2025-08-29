import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      {" "}
      <div class="min-h-screen flex items-center justify-center p-4">
        <div class="max-w-4xl w-full bg-white flex overflow-hidden rounded-2xl">
          {/* Left Side: Images (Hidden on small screens) */}
          <div class="hidden lg:block relative w-1/2 overflow-hidden">
            {/* Skewed panels with demo backgrounds */}
          </div>

          {/* Right Side: Login Form */}
          <div class="w-full lg:w-1/2 p-5 mx-16 flex flex-col justify-center">

            <div class="flex items-center justify-center mb-8">
              <img
                src="./img/Logo.png"
                className="relative w-[129px] h-[45px] top-[1rem]"
                alt="Logo"/>
            </div>

            <h1 class="text-2xl font-semibold mb-8 text-gray-800 text-center lg:text-center">
              Create an account
            </h1>

            <div class="w-full mb-4 ">
              <input
                type="Username"
                id="Username"
                placeholder="Full Name"
                class="w-[21rem] px-6 py-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-200"
              />
            </div>

            <div class="w-full mb-4">
              <input
                type="email"
                id="email"
                placeholder="Email"
                class="w-[21rem] px-6 py-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-200"
              />
            </div>

            <div class="w-full mb-2">
              <input
                type="password"
                id="password"
                placeholder="Password"
                class="w-[21rem] px-6 py-4 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              class="w-[21rem] bg-[#d7c970] text-gray-800 font-semibold py-4 mt-7 px-6 rounded-full "
            >
              Submit
            </button>

            <div class="flex items-center w-full mb-6 py-4">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="mx-4 text-gray-500 text-sm font-medium">
                Or Sign Up With
              </span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>

            <button class="w-full rounded-full flex items-center justify-center">
              {/* Google Icon */}
              <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span class="font-medium text-gray-700">Google</span>
            </button>
            <div class="w-full text-center py-5 text-sm text-gray-600 mb-6">
              <p>
                Have an account?
                <Link
                  to="/LoginIn"
                  class="hover:underline hover:text-gray-800">
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

export default SignUp;
