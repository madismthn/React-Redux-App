import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { getPosts } from "../../store/slices/posts";

import Post from "../Post/Post";
import { EditPostForm } from "../../components/EditPostForm/index";
import { AddPostForm } from "../../components/AddPostForm/index";
import Modal from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";

import pageStyle from "../style.module.css";
import s from "./style.module.css";

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
    return <h1>No data</h1>;
  }

  return (
    <div className="posts">
      <h1 className={pageStyle.title}>Posts</h1>
      <div className={pageStyle.content}>
        <AddPostForm />
        {selectedPost !== null && (
          <Modal open={modal}>
            <EditPostForm selectedPost={selectedPost} />
            <Button onClick={() => setModal(false)}>Close Edit Form</Button>
          </Modal>
        )}

        {posts.map((post, index) => {
          return (
            <Fragment key={post.id}>
              <Post
                className={s.post}
                buttonsClassName={s.buttons}
                key={post.id}
                index={index}
                post={post}
                onClick={() => showEditPostForm(post)}
              />
              <NavLink to={`/posts/${post.id}`}>
                <Button>Read more</Button>
              </NavLink>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};
