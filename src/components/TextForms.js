import { useState } from "react";
import React from "react";

export default function TextForms(props) {
  // Uppercase fun
  const handleUpClicked = () => {
    // console.log("UpperCase Button Clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted To Uppercase ", "success");
  };

  // Lowercase fun
  const handleLcClicked = () => {
    // console.log("UpperCase Button Clicked" + text);
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Coverted To Lowercase ", "success");
  };

  // Clear Fun
  const handleClearClicked = () => {
    let newtext = " ";
    setText(newtext);
    props.showAlert("Clear the Text-Box ", "success");
  };

  // Remove Extra Space Fun
  const handleResClicked = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Remove The Extra Space ", "success");
  };

  //Copy Fun
  const handleCopytextClicked = () => {
    // document.querySelector("textarea").select();
    // document.execCommand("copy");
    // // var text = document.getElementById("myBox");
    // // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied To  Clipboard ", "success");
  };

  const handleonclick = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  // Create Hook and use State
  const [text, setText] = useState("");
  //   text  = "New Text"; -- Wrong way to change state
  //   setText("Hiiii"); -- Correct Way to change state

  return (
    <>
      <div
        className="countainer"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleonclick}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClicked}
        >
          Convert To Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLcClicked}
        >
          Convert To Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleResClicked}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleCopytextClicked}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClicked}
        >
          Clear Text
        </button>
      </div>

      <div
        className="countainer my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2> Your Text Summery</h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Character
        </p>
        <p>{0.008 * text.split("").length} Miniute Read</p>
        <h2>Preview</h2>
        <p> {text.length > 0 ? text : " Nothing To Preview  "} </p>
      </div>
    </>
  );
}
