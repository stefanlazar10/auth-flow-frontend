import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import clsx from "clsx";
const OTPForm = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitOTP = async (code) => {
    console.log(code);
    setIsLoading(true);
    try {
      const response = await AuthService.verifyOTPCode(code);
      if (response.status === 200) {
        navigate("/favourites");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const code =
      event.target["code-1"].value +
      event.target["code-2"].value +
      event.target["code-3"].value +
      event.target["code-4"].value +
      event.target["code-5"].value +
      event.target["code-6"].value;
    handleSubmitOTP(code);
  };

  return (
    <>
      <div className="text-center items-center mb-5">
        We Send You Email Please Check Your Mail And Complete OTP Code
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-x-2 mb-5 ">
          <input
            name="code-1"
            className="text-center border bg-grey-100 text-sm rounded-xl  w-1/3 p-2.5 focus:bg-white"
            type="text"
            id="digit-1"
            data-next="digit-2"
            maxLength="1"
            placeholder="0"
          />
          <input
            className="text-center border bg-grey-100 text-sm rounded-xl  w-1/3 p-2.5 focus:bg-white"
            type="text"
            id="digit-2"
            name="code-2"
            data-next="digit-3"
            data-previous="digit-1"
            maxLength="1"
            placeholder="0"
          />
          <input
            className="text-center border bg-grey-100 text-sm rounded-xl  w-1/3 p-2.5 focus:bg-white"
            type="text"
            id="digit-3"
            name="code-3"
            data-next="digit-4"
            data-previous="digit-2"
            maxLength="1"
            placeholder="0"
          />
          <input
            className="text-center border bg-grey-100 text-sm rounded-xl  w-1/3 p-2.5 focus:bg-white"
            type="text"
            id="digit-4"
            name="code-4"
            data-next="digit-5"
            data-previous="digit-3"
            maxLength="1"
            placeholder="0"
          />
          <input
            className="text-center border bg-grey-100 text-sm rounded-xl  w-1/3 p-2.5 focus:bg-white"
            type="text"
            id="digit-5"
            name="code-5"
            data-next="digit-6"
            data-previous="digit-4"
            maxLength="1"
            placeholder="0"
          />
          <input
            className="text-center border bg-grey-100 text-sm rounded-xl  w-1/3 p-2.5 focus:bg-white"
            type="text"
            id="digit-6"
            name="code-6"
            data-previous="digit-5"
            maxLength="1"
            placeholder="0"
          />
        </div>
        <button
          disabled={isLoading}
          className={clsx(
            "mt-auto mb-20 text-center border  rounded-3xl  w-full p-2.5 text-white font-medium",
            isLoading ? "bg-grey-300" : "bg-regal-green"
          )}
          type="submit"
        >
          Confirm
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
export default OTPForm;
