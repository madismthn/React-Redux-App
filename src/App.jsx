import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";

import Home from "./pages/Home/Home";
import { Posts } from "./pages/Posts/";
import PostDetails from "./pages/PostDetails/PostDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import "./App.css";

function App() {
  const posts = useSelector((state) => state.posts.list);
  const loading = useSelector((state) => state.posts.loading);

  const isFirstLoading = loading && posts.length === 0;

  return (
    <>
      {isFirstLoading && <h1>Loading...</h1>}
      {!isFirstLoading && (
        <>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/posts/:postId" element={<PostDetails />} />
              <Route path="/posts" element={<Posts />} />
            </Routes>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
