import Navbar from "../Navbar/Navbar";
import { useTranslation } from "react-i18next";
import SignUpForm from "../../components/form/SignUpForm";
const SignUp = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" relative h-full">
        <img className="absolute z-0 w-full" src="Rectangle 4.png" />
        <div className="relative sticky z-10">
          <Navbar />
        </div>

        <div className="relative z-10 px-12 pt-72 pb-24 sm:pt-60 tablet:pt-72 lg:pt-56 md:pt-72 h-full">
          <div className="text-3xl color-black text-center font-bold mb-8">
            {t("sign-up.title")}
          </div>
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default SignUp;
