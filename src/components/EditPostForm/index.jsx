import { Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { editPost } from "../../store/slices/posts";

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

export const EditPostForm = ({ selectedPost }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.posts.loading);

  const onFinish = (values) => {
    dispatch(
      editPost({
        ...selectedPost,
        title: values.title,
        description: values.description,
      })
    );
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      initialValues={{
        title: selectedPost.title,
        description: selectedPost.description,
      }}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name="title"
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
        name="description"
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
        <Button loading={loading} type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
