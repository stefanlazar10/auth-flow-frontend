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
          Next
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
