import "./style.css"
function Comment({comment}){
    return(
        <div className="comm">
            <p>{comment.user.username}: </p>
            <p>{comment.text}</p>
        </div>
    );
}
export default Comment;