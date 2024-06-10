import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
const OTPForm = () => {
  let navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();
  const handleSubmitOTP = async (otpCode) => {
    setIsLoading(true);
    try {
      const response = await AuthService.verifyOTPCode(otpCode);

      navigate("/selectFavourites");
      console.log(response);
    } catch (error) {
      console.log("Error", error.response);
      if (error.response && error.response.status === 403) {
        alert("Invalid OTP Code!");
      }
      setIsLoading(false);
      console.log(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const otpCode =
      event.target["code-1"].value +
      event.target["code-2"].value +
      event.target["code-3"].value +
      event.target["code-4"].value +
      event.target["code-5"].value +
      event.target["code-6"].value;
    handleSubmitOTP(otpCode);
  };

  return (
    <>
      <div className="text-center items-center mb-5">{t("otp.email-sent")}</div>

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
            t("labels.confirm")
          )}
        </button>
      </form>

      <div className="text-center pt-12 mt-auto">
        {t("otp.existing-account")}
        <button disabled={isLoading}>
          {!isLoading ? (
            <Link
              to="/login"
              style={{
                color: "#22577A",
                textDecoration: "underline",
                marginLeft: "4px",
              }}
            >
              {t("labels.sign-in")}
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
                marginLeft: "4px",
              }}
            >
              {" "}
              {t("labels.sign-in")}
            </span>
          )}
        </button>
      </div>
    </>
  );
};
export default OTPForm;
