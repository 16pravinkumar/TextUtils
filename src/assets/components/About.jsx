import PropTypes from "prop-types";

let About = (props) => {
  // console.log(props.mode)
  return (
    <>
      <div
        style={{ backgroundColor: props.mode === "dark" ? "#2E3038" : "white" }}
        className="accordion accordion-flush "
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Uppercase Conversion with TextUtils:
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Transform any text into uppercase effortlessly with TextUtils.
              Whether it's a single word, a sentence, or an entire document,
              TextUtils quickly converts all characters to their uppercase
              equivalents, ensuring uniformity and clarity in your text.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Lowercase Conversion with TextUtils:
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Need your text in lowercase? TextUtils has got you covered. Simply
              input your text, and TextUtils swiftly converts it to lowercase,
              making it suitable for various formatting requirements and
              stylistic preferences.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Capitalization with TextUtils:
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Elevate your text with proper capitalization using TextUtils.
              Whether you're writing a title, a headline, or enhancing
              readability, TextUtils capitalizes the first letter of each word,
              giving your text a professional and polished appearance.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
About.propTypes = {
  mode: PropTypes.string,
};
export default About;
