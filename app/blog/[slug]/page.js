// import React from 'react';

// pages/single-blog/[id].js
import { useRouter } from 'next/router';

const SingleBlogPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch blog details using the API based on 'id'

  return (
    <div>
      {/* Display blog details */}
    </div>
  );
};

export default SingleBlogPage;
