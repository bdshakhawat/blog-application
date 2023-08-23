
"use client"

// import React from 'react';
// import {useEffect, useState} from 'react';
import { useEffect, useState } from 'react';
import BlogItem from '../components/BlogItem';
import styles from './Home.module.css';

function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetching the blogs from the API (assuming you have an API route set up)
    fetch('https://basic-blog.teamrabbil.com/api/post-newest')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text} >Welcome to Simple Blog</h1>
      <section className={styles.blogSection}>
              {blogs.map(blog => (

          <BlogItem key={blog.id} blog={blog} />

        ))}

      </section>
    </div>
  );
}

export default HomePage;
