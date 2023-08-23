
function BlogItem({ blog }) {
    return (
      <div>
        <h2>{blog.title}</h2>
        <p>{blog.short}</p>
        <p>{blog.summary}</p>
        <a href={`/blog/${blog.id}`}>Read more</a>
      </div>
    );
  }
  
  export default BlogItem;
  