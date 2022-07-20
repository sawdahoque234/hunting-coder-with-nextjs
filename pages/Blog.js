import Link from "next/link";
import React, { useEffect, useState } from "react";
import blog from "../styles/Blog.module.css";
import * as fs from "fs";

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <div className={blog.container}>
      <main className={blog.main}>
        <div className={blog.blogpost}>
          <h2 className={blog.subtitle}>Popular Blog Post</h2>
          {blogs.map((blogitem, index) => {
            return (
              <div key={blogitem.index}>
                <Link href={`/blogpost/${blogitem.slug}`}>
                  <h3>{blogitem.title}</h3>
                </Link>
                <p>{blogitem.metadesc.slice(0, 100)}..</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  return {
    props: { allBlogs },
  };
}

export default Blog;
