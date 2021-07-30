import "./recoveryPassword.style.scss";

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
        <button className="submit-button">ورود</button>
      </div>
    </div>
  );
};

export default RecoveryPassword;
