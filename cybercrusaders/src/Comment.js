import React, { useState } from "react";

const Comment = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(text, setText);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">submit</button>
      <button type="button" onClick={() => setText("")}>
        cancel
      </button>
    </form>
  );
};

export default Comment;
