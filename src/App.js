import NotFound from "./pages/NotFound/NotFound";
import React from "react";
import { useEffect } from "react";
import { Route, Routes, useSearchParams, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import OTP from "./pages/OTP/Otp";
import SelectFavourites from "./pages/SelectFavourites/SelectFavourites";
import "./i18n";
import { useTranslation } from "react-i18next";

const App = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  let [currentQueryParams, setQueryParams] = useSearchParams();
  const handleChangeLanguage = async (language) => {
    await i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
  };
  useEffect(() => {
    const language = currentQueryParams.get("lang");
    if (!["ro", "en"].includes(language)) {
      searchParams.set("lang", "en");
      setQueryParams(searchParams);
    }
    handleChangeLanguage(language);
  }, [currentQueryParams.get("lang")]);

  return (
    <div className="w-[100vw] h-[100vh]">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/favourites" element={<SelectFavourites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
