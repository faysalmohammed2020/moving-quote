"use client";
import { postdata } from '@/app/data/postdata';
import Link from "next/link";

const blogAll = () => {
   
  
    return (
        <section className="py-16 bg-black text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-10">All Blogs</h2>
          <p className="text-gray-300 mb-10">
            Explore how our innovative logistics solutions meet your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {postdata.map((blogs, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                  {blogs.post_title}
                </h3>
                <div
                className="text-white text-lg leading-7"
                dangerouslySetInnerHTML={{ __html: blogs.post_content.slice(0,300) + "..."}}>
            </div>
            
            <button className="mt-5 bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors">
            <Link href={`/blogs/${blogs.ID}`}>Read More</Link>
            </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default blogAll;
  