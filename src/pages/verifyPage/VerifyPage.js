import "./verifyPage.style.scss";
import Banner from "../../components/banner/Banner";
import GlobalSubmitButton from "../../components/submitButton/GlobalSubmitButton";

const VerifyPage = () => {
  return (
    <div className="verify">
      <Banner />
      <div className="container">
        <div className="login--mobile-input">
          <input
            className="login--mobile-input__input"
            type="number"
            placeholder="شماره موبایل خود را وارد کنید"
          />
          <input className="login--mobile-input__input" type="number" />
        </div>
        <div className="flex-container">
          <button className="back-button">b</button>
          <GlobalSubmitButton text={"ارسال"} />
        </div>
      </div>
    </div>
  );
};
export default VerifyPage;
