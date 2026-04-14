import React from "react";

function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-10">
      
      {/* About Section */}
      <div className="bg-white max-w-4xl w-full p-8 rounded-2xl shadow-md">
        
        {/* Title */}
        <h1 className="text-blue-600 text-4xl font-bold mb-4 text-center">
          facebook
        </h1>

        {/* Tagline */}
        <p className="text-center text-gray-700 text-lg mb-6">
          Facebook helps you connect and share with the people in your life.
        </p>

        <hr className="mb-6" />

        {/* About Content */}
        <div className="space-y-4 text-gray-700 text-md leading-relaxed">
          <p>
            Facebook is a social networking platform that allows users to
            connect with friends, family, and communities online. It enables
            people to share photos, videos, posts, and stay updated with what's
            happening around the world.
          </p>

          <p>
            With features like messaging, groups, pages, and marketplace,
            Facebook provides a complete digital environment for communication,
            entertainment, and business.
          </p>

          <p>
            Our mission is to bring people closer together and make the world
            more open and connected.
          </p>
        </div>

        {/* Features */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3 text-gray-800">
            Key Features
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Create and manage your profile</li>
            <li>Connect with friends and family</li>
            <li>Share posts, photos, and videos</li>
            <li>Join groups and communities</li>
            <li>Chat using Messenger</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 text-sm text-gray-500 text-center">
        <p>
          Create a Page for a celebrity, brand or business.
        </p>
      </div>

    </div>
  );
}

export default AboutUs;