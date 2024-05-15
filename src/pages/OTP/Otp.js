import { useTranslation } from "react-i18next";
import OTPForm from "../../components/form/OtpForm";
const OTP = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" relative h-full">
        <img className="absolute z-0 w-full" src="Rectangle 4.png" />
        <div className="relative z-10 px-12 pt-72 pb-24 h-full">
          <div className="text-3xl color-black text-center font-bold mb-8">
            {t("otp.title")}
          </div>
          <OTPForm />
        </div>
      </div>
    </>
  );
};
export default OTP;
