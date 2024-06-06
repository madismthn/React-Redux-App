import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
import { EditPostForm } from "../../components/EditPostForm/index";

import { deletePost, likePost } from "../../store/slices/posts";
import { Button } from "../../components/Button/Button";

import heartIconBlack from "../../assets/heart-black.svg";
import heartIconRed from "../../assets/heart-red.svg";

import pageStyle from "../style.module.css";
import s from "./style.module.css";

const PostDetails = () => {
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState(null);
  const [modal, setModal] = useState(false);
  const handlePostDeletion = (id) => {
    dispatch(deletePost(id));
  };
  const handleLikeSwitch = (likedPost) => {
    dispatch(likePost(likedPost));
  };
  const showEditPostForm = (post) => {
    setSelectedPost(post);
    setModal(true);
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
      {selectedPost !== null && (
        <Modal open={modal}>
          <EditPostForm selectedPost={selectedPost} />
          <Button onClick={() => setModal(false)}>Close Edit Form</Button>
        </Modal>
      )}
      <h1 className={pageStyle.title}>{post.title}</h1>
      <p className={pageStyle.content}>{post.foolDescription}</p>
      <div className={s.buttons}>
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
        <Button onClick={() => showEditPostForm(post)}>Edit</Button>
      </div>

      <NavLink to="/posts">Back to posts</NavLink>
    </div>
  );
};

export default PostDetails;
