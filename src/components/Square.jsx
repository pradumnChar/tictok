import React from "react";

const square = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        style={{
          border: "5px inset pink",
          height: "80px",
          width: "80px",
          textAlign: "center",
        }}
        className="square"
      >
        <h1>{props.value}</h1>
      </div>
    </>
  );
};

export default square;
