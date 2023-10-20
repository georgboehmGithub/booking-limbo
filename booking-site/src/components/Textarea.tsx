import React from "react";

const textareaStyle = {
  border: "2px solid #000",
  padding: "10px",
  width: "50%",
  height: "150px",
};

const TextArea: React.FC<{}> = () => <textarea style={textareaStyle} />;

export default TextArea;
