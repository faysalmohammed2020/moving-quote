"use client";
import { postdata } from "@/app/data/postdata";
import { useParams } from "next/navigation";

const BlogCategory = () => {
  const { id } = useParams(); 

  
  const selectedPost = postdata.find((blog) => blog.ID === id
  );

  
  if (!selectedPost) {
    return <p className="text-center mt-20 text-2xl">Category not found.</p>;
  }


  

  return (
    <div className="">
    {/* Blog Header Section */}
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6">
        {/* Blog Title */}
        <h1 className="text-4xl font-bold mb-6">{selectedPost.post_title}</h1>
        {/* Post Meta */}
        <div className="text-gray-500 text-sm mb-4">
          Published on:{" "}
          {new Date(selectedPost.post_date).toLocaleDateString()}
        </div>
        {/* Blog Content */}
        <div
          className="text-gray-700 text-lg leading-7"
          dangerouslySetInnerHTML={{ __html: selectedPost.post_content }}
        ></div>
      </div>
    </div>
  </div>
  );
};

export default BlogCategory;
