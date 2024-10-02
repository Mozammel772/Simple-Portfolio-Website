import React from "react";
import Hospital from "/src//Pages//HomePage/image/Hospital.png";
const CompleteProjects = () => {
  return (
    <div className="bg-red-100 w-full py-10 px-5">
      <div className="text-center mx-20">
        <h1 className="text-4xl text-secondary font-bold">
          My Complete Projects
        </h1>
        <p className="font-semibold font-sm py-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          quisquam repudiandae, ratione possimus animi sit eaque dolore
          sapiente, non iusto voluptate veniam neque ea praesentium officiis
          error eius a impedit.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-secondary">
              Hotel Management!
            </h2>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              placeat. Amet vero recusandae, corrupti consequuntur quo rerum
              esse maxime. Unde quibusdam molestiae, qui fuga tempore eveniet
              dolor odit tempora. Ipsum.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src="" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-secondary">
              Hospital Management!
            </h2>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              placeat. Amet vero recusandae, corrupti consequuntur quo rerum
              esse maxime. Unde quibusdam molestiae, qui fuga tempore eveniet
              dolor odit tempora. Ipsum.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img src={Hospital} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-secondary">
              E-Commerce!
            </h2>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              placeat. Amet vero recusandae, corrupti consequuntur quo rerum
              esse maxime. Unde quibusdam molestiae, qui fuga tempore eveniet
              dolor odit tempora. Ipsum.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-secondary">
              Booking Management!
            </h2>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              placeat. Amet vero recusandae, corrupti consequuntur quo rerum
              esse maxime. Unde quibusdam molestiae, qui fuga tempore eveniet
              dolor odit tempora. Ipsum.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-secondary">
              Hotel Management!
            </h2>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              placeat. Amet vero recusandae, corrupti consequuntur quo rerum
              esse maxime. Unde quibusdam molestiae, qui fuga tempore eveniet
              dolor odit tempora. Ipsum.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl font-bold text-secondary">
              protected website!
            </h2>
            <p className="text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              placeat. Amet vero recusandae, corrupti consequuntur quo rerum
              esse maxime. Unde quibusdam molestiae, qui fuga tempore eveniet
              dolor odit tempora. Ipsum.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary">Visit Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProjects;
