import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../store/slices/posts";
import { useParams } from "react-router-dom";
import heartIconBlack from "../../assets/heart-black.svg";
import heartIconRed from "../../assets/heart-red.svg";

export default function Post({ className, post, index, onClick }) {
  const dispatch = useDispatch();

  const handlePostDeletion = (id) => {
    dispatch(deletePost(id));
  };

  const handleLikeSwitch = (likedPost) => {
    dispatch(likePost(likedPost));
  };

  const params = useParams();
  console.log(params);
  return (
    <div className={className} key={post.id}>
      <div>
        <span>{index + 1}.</span>
        <span>{post.title}</span>
      </div>
      <div>{post.description}</div>
      <button onClick={() => handleLikeSwitch(post)}>
        {/* {post.liked ? "👍" : "👎"} */}
        {post.liked && (
          <img width="20px" className="heart" src={heartIconRed} alt="Heart" />
        )}

        {!post.liked && (
          <img
            width="20px"
            className="heart"
            src={heartIconBlack}
            alt="Heart"
          />
        )}
      </button>

      <button onClick={() => handlePostDeletion(post.id)}>Delete</button>
      <button onClick={onClick}>Edit</button>
    </div>
  );
}
