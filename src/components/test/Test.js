import PropTypes from "prop-types";

const Test = (props) => (
  <div>
    <div>{props.name}</div>
    <div>{props.age}</div>
    <div>{props.city}</div>
  </div>
);

Test.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  city: PropTypes.string,
};

export default Test;
