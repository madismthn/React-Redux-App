import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../../store/slices/posts";
import { useParams } from "react-router-dom";
import heartIconBlack from "../../../../assets/heart-black.svg";
import heartIconRed from "../../../../assets/heart-red.svg";
import { Button } from "../../../Button/Button";

export default function Post({
  className,
  post,
  index,
  onClick,
  buttonsClassName,
}) {
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
      <h3>
        <span>{index + 1}.</span>
        <span>{post.title}</span>
      </h3>
      <div>{post.description}</div>
      <div className={buttonsClassName}>
        <Button onClick={() => handleLikeSwitch(post)}>
          {post.liked && (
            <img
              width="20px"
              className="heart"
              src={heartIconRed}
              alt="Heart"
            />
          )}

          {!post.liked && (
            <img
              width="20px"
              className="heart"
              src={heartIconBlack}
              alt="Heart"
            />
          )}
        </Button>

        <Button onClick={() => handlePostDeletion(post.id)}>Delete</Button>
        <Button onClick={onClick}>Edit</Button>
      </div>
    </div>
  );
}
