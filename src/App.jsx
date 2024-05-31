import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import Home from "./components/Home/Home";
import { Posts } from "./components/Posts";
import PostDetail from "./components/PostDetails/PostDetails";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  const posts = useSelector((state) => state.posts.list);
  const loading = useSelector((state) => state.posts.loading);

  const isFirstLoading = loading && posts.length === 0;

  return (
    <>
      <h1>Vite + React</h1>

      {isFirstLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Router>
            <nav>
              <NavLink to="/">Home</NavLink>

              <NavLink to="/about">About</NavLink>

              <NavLink to="/contact">Contact</NavLink>

              <NavLink to="/posts">Posts</NavLink>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/posts/:postId" element={<PostDetail />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
