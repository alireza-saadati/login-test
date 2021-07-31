import "./submitButton.style.scss";
import PropTypes from "prop-types";

const GlobalSubmitButton = (props) => {
  return (
    <button className="global-submit-button" disabled={true}>
      {props.text}
    </button>
  );
};

GlobalSubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default GlobalSubmitButton;
