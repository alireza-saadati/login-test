import "./recoveryPassword.style.scss";
import GlobalSubmitButton from "../../components/globalSubmitButton/GlobalSubmitButton";
import Container from "../../components/container/Container";

const RecoveryPassword = () => {
  return (
    <div className="recovery">
      <div className="recovery--header">بازیابی رمز عبور</div>
      <Container>
        <input
          className="recovery--input-mobile global-input-style"
          type="number"
        />
        <input
          className="recovery--input-verify global-input-style"
          maxLength={4}
          placeholder="کد ارسال شده را وارد کنید"
        />
        <div className="link">
          <button type={"button"}>ارسال مجدد کد فعالسازی</button>
        </div>

        <div className="flex-center">
          <button className="back-button">b</button>
          <GlobalSubmitButton text={"ارسال"} />
        </div>
      </Container>
    </div>
  );
};

export default RecoveryPassword;
