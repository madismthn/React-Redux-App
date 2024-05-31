import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./style.module.css";
import Post from "../Post/Post";
import { EditPostForm } from "../EditPostForm";
import Modal from "../Modal/Modal";
import { AddPostForm } from "../AddPostForm";
import { getPosts } from "../../store/slices/posts";
import { NavLink } from "react-router-dom";

export const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.list);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  const [selectedPost, setSelectedPost] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const showEditPostForm = (post) => {
    setSelectedPost(post);
    setModal(true);
  };

  if (error) return <h2>{error.message}</h2>;

  if (loading === false && posts.length === 0) {
    return <h1>Нет данных</h1>;
  }

  return (
    <>
      <AddPostForm />
      {selectedPost !== null && (
        <Modal open={modal}>
          <EditPostForm selectedPost={selectedPost} />
          <button onClick={() => setModal(false)}>Close Edit Form</button>
        </Modal>
      )}

      {posts.map((post, index) => {
        return (
          <>
            <Post
              className={s.post}
              key={post.id}
              index={index}
              post={post}
              onClick={() => showEditPostForm(post)}
            />
            <NavLink to={`/posts/${post.id}`}>Подробнее</NavLink>
          </>
        );
      })}
    </>
  );
};
