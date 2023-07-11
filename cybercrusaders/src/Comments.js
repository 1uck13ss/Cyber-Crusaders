import "./styles/Comments.css";

const Comments = (comment) => {
  return (
    <div className="comment">
      <div className="commentProfile">
        <img
          src={comment.Comment.url}
          alt="profilePic"
          className="commentPic"
        ></img>
        <h3> {comment.Comment.name} </h3>
        {comment.display(comment.Comment.id) ? (
          <p onClick={() => comment.handleDelete(comment.Comment.index)}> x </p>
        ) : (
          <></>
        )}
      </div>
      <div className="commentText">
        <p> {comment.Comment.comment} </p>
      </div>
    </div>
  );
};

export default Comments;
