import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";

import Home from "./components/Pages/Home/Home";
import { Posts } from "./components/Pages/Posts/index";
import PostDetail from "./components/Pages/Posts/PostDetails/PostDetails";

import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";

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
            <nav className="navigation">
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
