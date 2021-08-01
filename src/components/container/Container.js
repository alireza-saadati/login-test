import "./container.style.scss";
import PropTypes from "prop-types";

const Container = (props) => {
  const { children, className, style } = props; //destructure

  return (
    <div className={`container ${className}`} style={style}>
      {children}
    </div>
  );
};

// const Container = (props) => {
// return (<div className={"container" + " " + className}>{props.children}</div>);
// };

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Container;
