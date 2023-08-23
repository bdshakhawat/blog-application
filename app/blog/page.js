// import React from 'react';

"use client"

// import React from 'react';
// import {useEffect, useState} from 'react';
import { useEffect, useState } from 'react';
import styles from '@/app/Home.module.css';
import Blog from '@/components/BlogPage';

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetching the blogs from the API (assuming you have an API route set up)
    fetch('https://basic-blog.teamrabbil.com/api/post-newest')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text} >Welcome to Simple Blog Page</h1>
      <section className={styles.blogSection}>
              {blogs.map(blog => (

          <Blog key={blog.id} blog={blog} />

        ))}

      </section>
    </div>
  );
}

export default BlogPage;
