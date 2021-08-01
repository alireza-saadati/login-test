import "./globalSubmitButton.style.scss";
import PropTypes from "prop-types";

const GlobalSubmitButton = (props) => {
  const { type, clicked, text = "" } = props;

  return (
    <button
      className="global-submit-button"
      // disabled={true}
      onClick={clicked}
      type={type}
    >
      {text}
    </button>
  );
};

GlobalSubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  clicked: PropTypes.func,
};

export default GlobalSubmitButton;
