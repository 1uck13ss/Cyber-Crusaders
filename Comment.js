import React, { useState } from "react";

const Comment = (onSubmit) => {
  const [text, setText] = useState("");

  return (
    <form onSubmit={() => onSubmit(text, setText)}>
      <textarea
        className="comment-form-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button>submit</button>
      <button>cancel</button>
    </form>
  );
};

export default Comment;
