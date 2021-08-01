import "./dataPage.style.scss";
import GlobalSubmitButton from "../../components/globalSubmitButton/GlobalSubmitButton";
import Container from "../../components/container/Container";

const DataPage = () => {
  return (
    <Container>
      <div className="data">
        <div className="data--header">اطلاعات شخصی خود را وارد کنید</div>
        <div className="data--input">
          <input className="data--input--box" type="text" placeholder="نام" />
          <input
            className="data--input--box"
            type="text"
            placeholder="نام خانوادگی"
          />
          <input className="data--input--box" type="text" placeholder="شهر" />
          <input className="data--input--box" type="text" placeholder="استان" />
          <input
            className="data--input--box"
            type="text"
            placeholder="رمز عبور"
          />
          <input
            className="data--input--box"
            type="text"
            placeholder="تکرار رمز عبور"
          />
        </div>
        <GlobalSubmitButton text="ورود" />
      </div>
    </Container>
  );
};

export default DataPage;
