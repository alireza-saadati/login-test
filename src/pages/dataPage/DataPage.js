import "./dataPage.style.scss";

const DataPage = () => {
  return (
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
      <button className="submit-button">ثبت اطلاعات</button>
    </div>
  );
};

export default DataPage;
