import React, { useState } from "react";

function About() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleReportClick = () => {
    window.location.href = "mailto:mohdatyab12@gmail.com"; // Change to your email
  };
  return (
    <div className="pt-6 pb-10">
      <section className="p-6 max-w-2xl mx-auto bg-orange-200 rounded-lg shadow-md ">
        <h2 className="text-3xl font-semibold mb-4">About the Project</h2>
        <p className="text-base mb-4">
          Welcome to our blogging platform, a dynamic web application designed
          for passionate writers and avid readers alike. This fully-fledged web
          app empowers registered users to explore a vibrant community of blogs
          while providing the tools to create, manage, and share their own posts
          effortlessly.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4 text-left">
          <li className="mb-2">
            User Registration & Login: Seamlessly register and log in to access
            personalized features.
          </li>
          <li className="mb-2">
            Blog Exploration: Discover a variety of blog posts through visually
            appealing preview cards on the homepage. Each card offers a glimpse
            into the content, inviting you to dive deeper.
          </li>
          <li className="mb-2">
            Read & Engage: Click on any blog card to view the complete article.
            Engage with diverse topics and insights shared by fellow users.
          </li>
          <li className="mb-2">
            Personal Blog Management: As a registered user, you can create,
            update, and delete your own blog posts. Whether you're sharing your
            thoughts, experiences, or expertise, managing your content is just a
            click away.
          </li>
          <li className="mb-2">
            Edit & Delete Options: If you authored a blog post, you’ll see
            options to easily edit or delete it from the blog view. This ensures
            that you have full control over your content.
          </li>
        </ul>
        <p className="text-base mb-4 text-left">
          Our platform is designed with user experience in mind, ensuring that
          navigating through blogs and managing your posts is intuitive and
          enjoyable. Whether you’re a seasoned blogger or new to the writing
          world, this app provides the perfect space to express yourself and
          connect with others.
        </p>
        <p className="text-base mb-4">
          Join us today and start sharing your story!
        </p>
        {/* Report Button */}
        <div className="relative">
          {isHovered && (
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-16 p-2 bg-gray-700 text-white text-sm rounded shadow-lg">
              Your feedback matters! Report any issues with a quick click.
            </span>
          )}
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleReportClick}
          >
            Report
          </button>
        </div>
      </section>
    </div>
    // <div>
    //   <h1>About the Project</h1>
    //   <div>
    //     Welcome to our blogging platform, a dynamic web application designed for
    //     passionate writers and avid readers alike. This fully-fledged web app
    //     empowers registered users to explore a vibrant community of blogs while
    //     providing the tools to create, manage, and share their own posts
    //     effortlessly.
    //   </div>
    //   <h1>Key Features:</h1>
    //   <ul>
    //     <li>
    //       User Registration & Login: Seamlessly register and log in to access
    //       personalized features.
    //     </li>
    //     <li>
    //       Blog Exploration: Discover a variety of blog posts through visually
    //       appealing preview cards on the homepage. Each card offers a glimpse
    //       into the content, inviting you to dive deeper.
    //     </li>
    //     <li>
    //       Read & Engage: Click on any blog card to view the complete article.
    //       Engage with diverse topics and insights shared by fellow users.
    //     </li>
    //     <li>
    //       Personal Blog Management: As a registered user, you can create,
    //       update, and delete your own blog posts. Whether you're sharing your
    //       thoughts, experiences, or expertise, managing your content is just a
    //       click away.
    //     </li>
    //     <li>
    //       Edit & Delete Options: If you authored a blog post, you’ll see options
    //       to easily edit or delete it from the blog view. This ensures that you
    //       have full control over your content.
    //     </li>
    //   </ul>
    //   <p>
    //     Our platform is designed with user experience in mind, ensuring that
    //     navigating through blogs and managing your posts is intuitive and
    //     enjoyable. Whether you’re a seasoned blogger or new to the writing
    //     world, this app provides the perfect space to express yourself and
    //     connect with others. Join us today and start sharing your story!
    //   </p>
    // </div>
  );
}

export default About;
