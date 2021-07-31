import "./recoveryPassword.style.scss";
import GlobalSubmitButton from "../../components/submitButton/GlobalSubmitButton";

const RecoveryPassword = () => {
  return (
    <div className="recovery">
      <div className="recovery--header">بازیابی رمز عبور</div>
      <input className="mobile-input__input__ss" type="number" />
      <input
        className="mobile-input__input"
        type="number"
        placeholder="کد ارسال شده را وارد کنید"
      />
      <a href="#" className="link">
        ارسال مجدد کد فعالسازی
      </a>
      <div className="flex-container">
        <button className="back-button">b</button>
        <GlobalSubmitButton text={"ارسال"} />
      </div>
    </div>
  );
};

export default RecoveryPassword;
