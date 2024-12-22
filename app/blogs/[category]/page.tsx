"use client";
import { serviceBlogTitle } from "@/app/data/blogData";
import { useParams } from "next/navigation";

const BlogCategory = () => {
  const { category } = useParams(); 

  
  const filteredBlogs = serviceBlogTitle.filter(
    (blog) => blog.category === category
  );

  
  if (filteredBlogs.length === 0) {
    return <p className="text-center mt-20 text-2xl">Category not found.</p>;
  }


  const categoryTitle = filteredBlogs[0]?.category
    .replace("-", " ")
    .toUpperCase();
  const heroImage = filteredBlogs[0]?.image;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Black Theme */}
      <div
        className="relative bg-black bg-cover bg-center text-white py-16"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{categoryTitle}</h1>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Explore insightful articles, guides, and tips to make your move smooth and stress-free.
          </p>
        </div>
        {/* Decorative Background (Dark overlay) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black opacity-60"></div>
      </div>

      {/* Blog Posts Section - Full Width */}
      <div className="w-full mx-auto py-12 px-4">
        {filteredBlogs.slice(0, 1).map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-8 shadow-lg rounded-lg mb-8"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              {blog.title}
            </h2>
            <p className="text-gray-600 mb-6">
              {blog.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCategory;
