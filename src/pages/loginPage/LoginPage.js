import "./loginPage.style.scss";
import React from "react";
import Banner from "../../components/banner/Banner";

const LoginPage = () => {
  return (
    <div className="login">
      <Banner />
      <div className="login--mobile-input">
        <input
          className="login--mobile-input__input"
          type="number"
          placeholder="شماره موبایل خود را وارد کنید"
        />
      </div>
      <button className="submit-button">ارسال</button>
    </div>
  );
};

export default LoginPage;
