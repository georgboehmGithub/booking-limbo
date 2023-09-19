import React from 'react';


type Props = {

}

const textareaStyle = {
    border: '2px solid #000', // Customize the border color and width
    padding: '10px', // Optional: Add padding to the textarea
    width: '50%', // Optional: Adjust the width as needed
    height: '150px', // Optional: Adjust the height as needed
  };

const TextArea: React.FC<Props> = () => <textarea style={textareaStyle}></textarea>

export default TextArea
