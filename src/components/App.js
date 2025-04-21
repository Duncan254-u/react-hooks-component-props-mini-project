import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      {/* Render the Header component with the blog name */}
      <Header name={blogData.name} />
      
      {/* Render the About component with the blog image and about text */}
      <About image={blogData.image} about={blogData.about} />
      
      {/* Render the ArticleList component with the blog posts */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;