import PropTypes from "prop-types";

let Alerts = (props) => {
  // console.log(props.alert.message);

  // let text = props.alert.type;
  //  let finalText = text.toLowerCase()
  //  finalText.charAt(0).toUpperCase() + finalText.slice(1)
  
  let captializeFirstChar = (word) => {
    
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  return (
    props.alert && <div className="container">
        <div className="alert alert-success" role="alert">
          <strong>{captializeFirstChar(props.alert.type)}:</strong> {props.alert.message} 
        </div>
      </div>
    
  );
};

Alerts.propTypes = {
  alert: PropTypes.object,
  // mode: PropTypes.string,
};
export default Alerts;
