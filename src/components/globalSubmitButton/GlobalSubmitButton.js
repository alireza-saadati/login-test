import "./globalSubmitButton.style.scss";
import PropTypes from "prop-types";

const GlobalSubmitButton = (props) => {
  // const { type, clicked, text = "" } = props;
  console.log(props);
  return (
    <button
      className="global-submit-button"
      // disabled={true}
      onClick={props.clicked}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

GlobalSubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  clicked: PropTypes.func,
};

export default GlobalSubmitButton;
