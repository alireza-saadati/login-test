import "./verifyPage.style.scss";
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
        <button className="back-button">b</button>
        <button className="submit-button">ورود</button>
      </div>
    </div>
  );
};
export default VerifyPage;
