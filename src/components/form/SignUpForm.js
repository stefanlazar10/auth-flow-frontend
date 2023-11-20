import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { useState } from "react";
import clsx from "clsx";
const SignUpForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSignUp = async (email, firstName, lastName, password) => {
    setIsLoading(true);
    try {
      const response = await AuthService.createCredentials(
        email,
        firstName,
        lastName,
        password
      );
      if (response.status === 200) {
        navigate("/otp");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const password = event.target.password.value;
    handleSignUp(email, firstName, lastName, password);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <input
          name="email"
          className="border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white"
          type="text"
          placeholder="Email"
        />
        <div className="flex gap-x-2 mb-4">
          <input
            name="firstName"
            className="border bg-grey-100 text-sm rounded-xl  w-1/2  p-2.5 focus:bg-white"
            type="text"
            placeholder="First Name"
          />
          <input
            name="lastName"
            className="border bg-grey-100 text-sm rounded-xl   w-1/2 p-2.5 focus:bg-white"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          name="password"
          className="border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white"
          type="text"
          placeholder="Password"
        />
        <input
          className="border bg-grey-100 text-sm rounded-xl  mb-4 w-full p-2.5 focus:bg-white"
          type="text"
          placeholder="Confirm Password"
        />
        <button
          disabled={isLoading}
          type="submit"
          className={clsx(
            " border  rounded-xl  w-full p-2.5 text-white font-medium",
            isLoading ? "bg-grey-300" : "bg-regal-green"
          )}
        >
          <Link to="/otp" />
          {isLoading ? (
            <svg
              aria-hidden="true"
              className="inline w-6 h-6 text-gray-400 animate-spin dark:text-gray-400 fill-white dark:fill-white"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          ) : (
            "Next"
          )}
        </button>
      </form>

      <div className="text-center pt-20 mt-auto">
        Already have an account?{" "}
        <button disabled={isLoading}>
          {!isLoading ? (
            <Link
              to="/login"
              style={{ color: "#22577A", textDecoration: "underline" }}
            >
              Login
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
              {" "}
              Login
            </span>
          )}
        </button>
      </div>
    </>
  );
};

export default SignUpForm;
