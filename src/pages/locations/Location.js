import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../../components/container/Container";

const Locations = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [provincesList, setProvincesList] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [citiesList, setCitiesList] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  // 1. fetch countries list
  const fetchCountriesList = () => {
    return axios
      .get(`https://datyar.vaslapp.com/public/api/v1/location/countries`)
      .then((response) => {
        setCountriesList(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchCountriesList();
  }, []);

  // 2. fetch provinces list
  const fetchProvincesList = () => {
    return axios
      .get(
        `https://datyar.vaslapp.com/public/api/v1/location/countries/states?country=${selectedCountry}`
      )
      .then((response) => {
        setProvincesList(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (selectedCountry) {
      fetchProvincesList();
    }
  }, [selectedCountry]);

  // 3. fetch cities list
  const fetchCitiesList = () => {
    return axios
      .get(
        `https://datyar.vaslapp.com/public/api/v1/location/countries/states/cities?country=${selectedCountry}&state=${selectedProvince}`
      )
      .then((response) => {
        setCitiesList(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (selectedProvince) {
      fetchCitiesList();
    }
  }, [selectedProvince]);

  const handleChangeCountry = (event) => setSelectedCountry(event.target.value);

  const handleChangeProvince = (event) =>
    setSelectedProvince(event.target.value);

  const handleChangeCity = (event) => setSelectedCity(event.target.value);

  return (
    <Container>
      <label htmlFor="country">کشور را انتخاب کنید:</label>
      <select name="country" id="country" onChange={handleChangeCountry}>
        <option value="-">-</option>
        {countriesList.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>

      <hr />

      <label htmlFor="province">استان را انتخاب کنید:</label>
      <select name="province" id="province" onChange={handleChangeProvince}>
        <option value="-">-</option>
        {provincesList.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>

      <hr />

      <label htmlFor="city">شهر را انتخاب کنید:</label>
      <select name="city" id="city" onChange={handleChangeCity}>
        <option value="-">-</option>
        {citiesList.map((city) => (
          <option value={city.name}>{city.name}</option>
        ))}
      </select>

      <hr />

      {/*{selectedCountry && selectedProvince && selectedCity*/}
      {/*  ? `${selectedCountry}, ${selectedProvince}, ${selectedCity}`*/}
      {/*  : ""}*/}

      {selectedCountry &&
        selectedProvince &&
        selectedCity &&
        `${selectedCountry}, ${selectedProvince}, ${selectedCity}`}
    </Container>
  );
};
export default Locations;
