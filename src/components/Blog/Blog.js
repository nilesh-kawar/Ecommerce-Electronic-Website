import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { blogData } from "../Data/Blog";

const Blog = () => {
  return (
    <section className="py-6 sm:py-12">
      <div className="container p-6 mx-auto space-y-8">
        <div className="flex justify-between">
          <h4 className="font-bold text-2xl md:text-3xl  md:mx-2 text-slate-800">
            Blog & Events
          </h4>
          <h6 className="text-base font-bold text-slate-900 hover:text-primary duration-150 flex items-center pr-3">
            View all Blogs &nbsp;
            <BsArrowRight />
          </h6>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {blogData.map((blog, i) => (
            <article key={i} className="flex flex-col cursor-pointer">
              <a href="/home" aria-label="New iPhone launched">
                <img
                  alt=""
                  className="object-cover w-full h-52 "
                  src={blog.img}
                />
              </a>
              <div className="flex flex-col flex-1 p-6 bg-gray-200">
                <a
                  href="/home"
                  className="text-xs tracking-wider uppercase hover:underline "
                >
                  {blog.category}
                </a>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug hover:text-primary">
                  {blog.title}
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs ">
                  <span>{blog.date}</span>
                  <span>{blog.views} views</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
