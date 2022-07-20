import React, { useEffect, useState } from "react";
import * as fs from "fs";

import blogpost from "../../styles/BlogPost.module.css";
const Slug = (props) => {
  function createMarkup(c) {
    return { __html: c };
  }
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={blogpost.container}>
      <main className={blogpost.main}>
        <h1 className={blogpost.h1}> {blog && blog.title}</h1>
        <div className={blogpost.blog}>
          {blog && (
            <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>
          )}
        </div>
      </main>
    </div>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "how-to-learn-html" } },
      { params: { slug: "how-to-learn-javascript" } },
      { params: { slug: "how-to-learn-nextjs" } },
      { params: { slug: "how-to-learn-reactjs" } },
    ],
    fallback: true, // false or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { slug } = context.params;
  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) },
  };
}
export default Slug;
