import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Form, Input } from "antd";

import { addNewPost } from "../../store/slices/posts";
import Modal from "../Modal/Modal";
import { Button } from "../Button/Button";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
};

export const AddPostForm = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const showAddPostForm = () => {
    setModal(true);
  };
  const loading = useSelector((state) => state.posts.loading);

  const onFinish = ({ post }) => {
    dispatch(
      addNewPost({
        title: post.title,
        description: post.description,
        liked: false,
        thumbnail: "https://loremflickr.com/640/480/people",
      })
    );
  };

  return (
    <>
      <Button onClick={() => showAddPostForm()}>Add new post</Button>
      <Modal open={modal}>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={["post", "title"]}
            label="Title"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name={["post", "description"]}
            label="Description"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 8,
            }}
          >
            <Button
              loading={loading}
              type="primary"
              htmlType="submit"
              onClick={() => setModal(false)}
            >
              Create a new post
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={() => setModal(false)}>Close add form</Button>
      </Modal>
    </>
  );
};
