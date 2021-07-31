import "./loginPage.style.scss";
import Banner from "../../components/banner/Banner";
import GlobalSubmitButton from "../../components/submitButton/GlobalSubmitButton";
import { useState } from "react";

const LoginPage = () => {
  const [mobile, setMobile] = useState("");

  const handleMobileChange = (event) => setMobile(event.target.value);

  if (mobile.length === 11) {
    alert("موبایل صحیح است");
  }

  return (
    <div className="login">
      <Banner />
      <div className="container">
        <div className="login--mobile-input">
          <input
            className="login--mobile-input__input"
            type="number"
            placeholder="شماره موبایل خود را وارد کنید"
            onChange={handleMobileChange}
            value={mobile}
          />
        </div>
        <GlobalSubmitButton text={"ارسال"} />
      </div>
    </div>
  );
};

export default LoginPage;
