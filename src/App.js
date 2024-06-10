import "./i18n";
import React from "react";
import OTP from "./pages/OTP/Otp";
import { useEffect } from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import ForgotPass from "./pages/ForgotPass/ForgotPass";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import SelectFavourites from "./pages/SelectFavourites/SelectFavourites";

const App = () => {
  const { i18n } = useTranslation();
  const handleChangeLanguage = async (language) => {
    await i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };
  useEffect(() => {
    const language = localStorage.getItem("lang");
    if (!language) {
      localStorage.setItem("lang", "en");
    }

    handleChangeLanguage(language);
  }, []);

  return (
    <div className="w-[100vw] h-[100vh]">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/favourites" element={<SelectFavourites />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </div>
  );
};

export default App;
