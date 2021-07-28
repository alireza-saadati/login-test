import "./verifyPage.style.scss";
import React from "react";
import Banner from "../../components/banner/Banner";

const VerifyPage = () => {
  return (
    <div className="verify">
      <Banner />
      <div className="login--mobile-input">
        <input
          className="login--mobile-input__input"
          type="number"
          placeholder="شماره موبایل خود را وارد کنید"
        />
        <input className="login--mobile-input__input" type="number" />
      </div>
      <div className="flex-container">
        <button className="submit-button">ورود</button>
        <button className="back-button">b</button>
      </div>
    </div>
  );
};

export default VerifyPage;
