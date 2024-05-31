import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const API_URL = "https://66082afaa2a5dd477b14181d.mockapi.io/posts";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch(`${API_URL}/posts`);

  if (!response.ok) {
    throw "Ошибка при получении постов";
  }

  return await response.json();
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  const response = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw "Ошибка при удалении поста";
  }

  return await response.json();
});

export const addNewPost = createAsyncThunk(
  "posts/addNewPost",
  async (newPost) => {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw "Ошибка при создании поста";
    }

    return await response.json();
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (editedPost) => {
    const response = await fetch(`${API_URL}/posts/${editedPost.id}`, {
      method: "PUT",
      body: JSON.stringify(editedPost),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw "Ошибка при редактировании поста";
    }

    return await response.json();
  }
);

export const likePost = createAsyncThunk("posts/likePost", async (post) => {
  const updatedPost = { ...post, liked: !post.liked }; // Создаем новый объект с измененным свойством liked

  const response = await fetch(`${API_URL}/posts/${updatedPost.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedPost),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw "Ошибка при редактировании поста";
  }

  return await response.json(); // Возвращаем обновленный пост
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    // getPosts
    builder.addCase(getPosts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
      state.error = null;
    });

    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // deletePost
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deletePost.fulfilled, (state, action) => {
      const deletedPostId = action.payload.id;

      state.list = state.list.filter((post) => {
        return post.id !== deletedPostId;
      });

      state.loading = false;
      state.error = null;
    });

    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // addNewPost
    builder.addCase(addNewPost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addNewPost.fulfilled, (state, action) => {
      state.list.push(action.payload);

      state.loading = false;
      state.error = null;
    });

    builder.addCase(addNewPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // editPost
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(editPost.fulfilled, (state, action) => {
      const editedPost = action.payload;

      state.list = state.list.map((post) => {
        if (post.id === editedPost.id) {
          return editedPost;
        }

        return post;
      });

      state.loading = false;
      state.error = null;
    });

    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    // likePost
    // likePost
    builder.addCase(likePost.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(likePost.fulfilled, (state, action) => {
      const likedPost = action.payload;

      state.list = state.list.map((post) => {
        if (post.id === likedPost.id) {
          return likedPost;
        }
        return post;
      });

      state.loading = false;
      state.error = null;
    });

    builder.addCase(likePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
