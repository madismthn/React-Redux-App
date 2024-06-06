import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import { likePost } from "../../store/slices/posts";
import { Button } from "../../components/Button/Button";

import heartIconBlack from "../../assets/heart-black.svg";
import heartIconRed from "../../assets/heart-red.svg";

import pageStyle from "../style.module.css";
import s from "./style.module.css";

const PostDetails = () => {
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
      <h1 className={pageStyle.title}>{post.title}</h1>
      <p className={pageStyle.content}>{post.foolDescription}</p>
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
      <NavLink to="/posts">Back to posts</NavLink>
    </div>
  );
};

export default PostDetails;
