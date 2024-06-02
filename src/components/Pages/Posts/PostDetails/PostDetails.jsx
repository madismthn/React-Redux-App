import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { likePost } from "../../../../store/slices/posts";
import heartIconBlack from "../../../../assets/heart-black.svg";
import heartIconRed from "../../../../assets/heart-red.svg";
import { Button } from "../../../Button/Button";
import s from "./style.module.css";

const PostDetail = () => {
  const dispatch = useDispatch();

  const handleLikeSwitch = (likedPost) => {
    dispatch(likePost(likedPost));
  };

  const { postId } = useParams();
  const post = useSelector((state) =>
    state.posts.list.find((post) => post.id === postId)
  );

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className={s.post}>
      <h1 className={s.title}>{post.title}</h1>
      <p>{post.description}</p>
      <Button onClick={() => handleLikeSwitch(post)}>
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
      </Button>
    </div>
  );
};

export default PostDetail;
