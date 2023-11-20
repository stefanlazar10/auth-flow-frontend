import { Link, useNavigate } from "react-router-dom";
import { FacebookIcon, GoogleIcon, LinkedIcon } from "../../assets";
import { AuthService } from "../../services/AuthService";
import { useState } from "react";
import clsx from "clsx";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (username, password) => {
    console.log("here");
    setIsLoading(true);
    try {
      const response = await AuthService.verifyCredentials(username, password);
      console.log(response);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      console.log("Error");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    handleSignIn(username, password);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col w-full  space-y-4 mb-8"
      >
        <input
          className="border bg-grey-100 text-sm rounded-xl   w-full p-2.5 focus:bg-white"
          type="text"
          placeholder="Username"
          name="username"
        />

        <input
          className="border bg-grey-100 text-sm rounded-xl   w-full p-2.5 focus:bg-white"
          type="password"
          placeholder="Password"
          name="password"
        />

        <button disabled={isLoading}>
          {!isLoading ? (
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "#5F5F5F",
                textDecoration: "none",
              }}
              to="/forgot-password"
            >
              Forgot password?
            </Link>
          ) : (
            <span
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "grey",
                pointerEvents: "none",
                textDecoration: "none",
              }}
            >
              Forgot password?
            </span>
          )}
        </button>

        <button
          disabled={isLoading}
          className={clsx(
            " border  rounded-xl  w-full p-2.5 text-white font-medium",
            isLoading ? "bg-grey-300" : "bg-regal-green"
          )}
        >
          Sign in
        </button>
      </form>

      <div className="flex flex-row justify-center items-center mb-4">
        <div className="bg-grey-100 h-1 w-1/3"></div>
        <div className="color-primary-grey mx-2">Or</div>
        <div className="bg-grey-100 h-1 w-1/3"></div>
      </div>

      <div className="flex justify-center">
        <GoogleIcon />
        <FacebookIcon />
        <LinkedIcon />
      </div>
      <div className="text-center mt-auto pt-20">
        Don't have account?{" "}
        <button disabled={isLoading}>
          {!isLoading ? (
            <Link
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "#5F5F5F",
                textDecoration: "underline",
              }}
              to="/sign-up"
            >
              Sign up
            </Link>
          ) : (
            <span
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                color: "grey",
                pointerEvents: "none",
                textDecoration: "underline",
              }}
            >
              Sign up
            </span>
          )}
        </button>
      </div>
    </>
  );
};
export default LoginForm;
