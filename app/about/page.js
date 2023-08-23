"use client"

// import React from 'react';
import {useEffect, useState} from 'react';
// import { useEffect, useState } from 'react';
import BlogDetail from '@/components/BlogDetail';
import styles from '@/app/Home.module.css'


function AboutPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetching the blogs from the API (assuming you have an API route set up)
    fetch('https://basic-blog.teamrabbil.com/api/post-details')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);


  

  return (
    <div className={styles.container}>
      <h1 className={styles.text} >Welcome to About Page</h1>
      <section className={styles.blogSection}>
              {blogs.map(blog => (

          <BlogDetail key={blog.id} blog={blog} />

        ))}

      </section>
    </div>
  );
}

export default AboutPage;



  
//   export default BlogDetail;

