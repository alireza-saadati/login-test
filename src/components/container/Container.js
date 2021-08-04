import "./container.style.scss";
import PropTypes from "prop-types";

const Container = (props) => (
  <div className={`container ${props.className}`} style={props.style}>
    {props.children}
  </div>
);

// const Container = (props) => {
//   const { children, className, style } = props; //destructure
//
//   //
//   //
//
//   return (
//     <div className={`container ${className}`} style={style}>
//       {children}
//     </div>
//   );
// };

// const Container = (props) => {
// return (<div className={"container" + " " + props.className} style={props.style}>{props.children}</div>);
// };

// class componant vs function componant

//  state = {count: 0}
//  this.setState({count: this.state.count + 1})
//
//  const [count, setCount] = useState(0)
//  setCount(count + 1)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Container;
