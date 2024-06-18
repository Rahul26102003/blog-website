import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import SideBar from "../components/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];
  return (
    <div>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Single Blog Page
        </h2>
      </div>

      {/* Blog Details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl font-bold mb-4 mt-8 text-blue-500 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_date}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_time}
          </p>
          <p className="text-base text-gray-500 mb-6">{content}</p>
          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
              eligendi minima aspernatur quos cupiditate quasi quam expedita
              numquam unde dolores praesentium quaerat reiciendis ab dolorem,
              debitis possimus nobis ea, nulla delectus, quo molestiae. Quos
              distinctio corporis a odit voluptate delectus.
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quo
              sed, optio repellendus iusto velit magni ipsum placeat dolorem
              quod culpa hic. Repellat optio libero recusandae, dolorem iure
              aspernatur voluptatibus suscipit eos maxime omnis temporibus
              tempora voluptate nobis. Necessitatibus, modi?
            </p>{" "}
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              placeat repudiandae harum ut unde, reprehenderit ipsa eos nobis.
              Ad tempore iste itaque quis. Dolorum labore exercitationem dolores
              ab voluptatem ea necessitatibus reiciendis provident, non enim
              ducimus vitae nostrum eveniet vero.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              placeat repudiandae harum ut unde, reprehenderit ipsa eos nobis.
              Ad tempore iste itaque quis. Dolorum labore exercitationem dolores
              ab voluptatem ea necessitatibus reiciendis provident, non enim
              ducimus vitae nostrum eveniet vero.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              placeat repudiandae harum ut unde, reprehenderit ipsa eos nobis.
              Ad tempore iste itaque quis. Dolorum labore exercitationem dolores
              ab voluptatem ea necessitatibus reiciendis provident, non enim
              ducimus vitae nostrum eveniet vero.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              placeat repudiandae harum ut unde, reprehenderit ipsa eos nobis.
              Ad tempore iste itaque quis. Dolorum labore exercitationem dolores
              ab voluptatem ea necessitatibus reiciendis provident, non enim
              ducimus vitae nostrum eveniet vero.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2">
            <SideBar/>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
