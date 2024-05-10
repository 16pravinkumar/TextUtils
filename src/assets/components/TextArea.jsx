import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import PreviewEmpty from "./PreviewEmpty";

export let TextArea = (props) => {
  // console.log(props.showAlert("Idid","dd"))
  let [currentValue, setCurrentValue] = useState("");
  let [charactersInSentetce, setCharactersInSentence] = useState(0);
  let [wordsInSentence, setWordsInSentence] = useState(0);

  let handleUpperCase = () => {
    // alert(currentValue.toUpperCase());
    setCurrentValue(currentValue.trim().toUpperCase());
    props.showAlert("Converted to UpperCase",'success')
    // setCurrentValue(""); // Clear the textarea
  };

  let handleLowerCase = () => {
    // alert(currentValue.toLowerCase());
    setCurrentValue(currentValue.trim().toLowerCase());
    props.showAlert("Converted to LowerCase",'success')

    // setCurrentValue(""); // Clear the textarea
  };

  let handleCaptialize = () => {
    let toCapitalize = currentValue;
    let splittedData = toCapitalize.split(" ");
    let res = splittedData.map((currVal) => {
      return currVal.charAt(0).toUpperCase() + currVal.slice(1);
    });
    // alert(res.join(" "));
    setCurrentValue(res.join(" ").trim());
    props.showAlert("Converted to Captialize","success")
    // setCurrentValue(""); // Clear the textarea
  };

  let getData = (data) => {
    let splittedData = data.split(" ");
    let removeWideSpace = splittedData
      .map((item) => item.trim())
      .filter((item) => item !== "");
    return removeWideSpace.length;
  };
  let getTrimedData = (data) => {
    let splittedData = data.split("");
    let removeWideSpace = splittedData
      .map((item) => item.trim())
      .filter((item) => item !== "");
    return removeWideSpace.length;
  };

  let handleOnChangeData = (e) => {
    setCurrentValue(e.target.value);
    setCharactersInSentence(e.target.value.trim().length);
    setCharactersInSentence(getTrimedData(e.target.value));
    setWordsInSentence(getData(e.target.value));
  };

  let copyData = () => {
    let text = document.querySelector("#dataUser");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(`"Copied"`,"success")

  };

  const textColor = { color: props.mode === "dark" ? "white" : "black" };
  return (
    <>
      <div className="container p-4">
        <h1 style={textColor} className="h1">
          {props.heading}
        </h1>
        <div className="input-group mb-3">
          <textarea
            type="text"
            className="form-control"
            placeholder="Enter your input"
            aria-label="Username"
            aria-describedby="basic-addon1"
            id="dataUser"
            rows="6"
            value={currentValue}
            onChange={(e) => handleOnChangeData(e)}
            style={{backgroundColor : props.mode === "dark" ? "#2E3038": "white",color: props.mode ==="dark"?"white":"black"}}
          />
          
        </div>
        <button onClick={handleUpperCase} className="btn btn-primary my-2 mx-2">
          Convert To UpperCase
        </button>
        <button onClick={handleLowerCase} className="btn btn-primary my-2 mx-2">
          Convert To LowerCase
        </button>
        <button
          onClick={handleCaptialize}
          className="btn btn-primary my-2 mx-2"
        >
          Convert To Captial
        </button>
        <button onClick={copyData} className="btn btn-primary my-2 mx-2">
          Copy Text
        </button>

        <h1 style={textColor} className="h1">
          Your Text Summary
        </h1>
        <p style={textColor}>
          There are total <strong>{charactersInSentetce} characters</strong> and{" "}
          <strong>{wordsInSentence} Words</strong>
        </p>
        <p style={textColor}>
          Time required to read the above content is{" "}
          <strong> {charactersInSentetce / 200} min</strong>
        </p>

        <h1 style={textColor} className="h1">
          Preview
        </h1>

        {currentValue.length === 0 ? (
          <PreviewEmpty />
        ) : (
          <div
            style={{
              border: "2px solid grey",
              padding: "20px",
              cursor: "pointer",
              color: `${textColor}`,
            }}
            readOnly
          >
            <FaRegCopy
              style={{
                float: "right",
                marginLeft: "2px",
                fontSize: "20px",
                ...textColor,
              }}
              onClick={() => copyData()}
            ></FaRegCopy>
            <p
              style={{ width: "100%", height: "auto", ...textColor }}
              onClick={() => copyData()}
            >
              {currentValue}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

TextArea.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string,
  showAlert: PropTypes.func
};
