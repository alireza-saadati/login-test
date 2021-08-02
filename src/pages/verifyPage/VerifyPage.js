import "./verifyPage.style.scss";
import Banner from "../../components/banner/Banner";
import GlobalSubmitButton from "../../components/globalSubmitButton/GlobalSubmitButton";
import Container from "../../components/container/Container";

const VerifyPage = (props) => {
  // const state = props.history.location.state; // ==> 09017400180
  // console.log("1. state: ", state);
  const { state } = props.history.location; // ==> 09017400180
  console.log("2. react-router state: ", state);

  return (
    <div className="verify">
      <Banner />
      <Container>
        <div className="login--mobile-input">
          <input
            className="global-input-style"
            type="number"
            defaultValue={state}
          />
          <input
            className="global-input-style"
            type="number"
            placeholder="کد ارسال شده را وارد کنید"
          />
        </div>
        <div className="flex-center">
          <button className="back-button">b</button>
          <GlobalSubmitButton text={"ارسال"} />
        </div>
      </Container>
    </div>
  );
};
export default VerifyPage;
