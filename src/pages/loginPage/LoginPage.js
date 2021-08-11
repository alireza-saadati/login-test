import "./loginPage.style.scss";
import Banner from "../../components/banner/Banner";
import GlobalSubmitButton from "../../components/globalSubmitButton/GlobalSubmitButton";
import { useState } from "react";
import Error from "../../components/error/Error";
import Container from "../../components/container/Container";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [showError, setShowError] = useState(false);
  const history = useHistory();

  const handleMobileChange = (event) => setMobile(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (mobile.length === 11) {
      // using window.location
      // window.location.pathname = "/verify";
      // 2. using react-router
      return history.push({
        pathname: "/verify",
        state: mobile,
      });
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="login">
      <Banner />
      <Container className={"center"} style={{ backgroundColor: "red" }}>
        <form className="login--mobile-input">
          <input
            maxLength={11}
            className="login--mobile-input__input"
            placeholder="شماره موبایل خود را وارد کنید"
            onChange={handleMobileChange}
            // onChange={(event) => setMobile(event.target.value)}
            value={mobile}
          />
          <GlobalSubmitButton text={"ارسال"} type="submit" clicked={onSubmit} />
        </form>
        {showError && <Error />}
      </Container>
    </div>
  );
};

export default LoginPage;
