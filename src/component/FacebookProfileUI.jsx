import React, { useEffect } from "react";
import { data, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import apiClient from "../api";

export default function FacebookProfileUI() {
  const [response, setResponse] = useState({});
  const [iserror, setIserror] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isloading, setIsloading] = useState(true);
  const params = useParams();
  const id = params.idforall;
  console.log("id", id);

  useEffect(() => {
    apiClient
      .get(`/profiles/${id}`)
      .then((responce) => {
        console.log(responce.data);
        setIsloading(false);
      })
      .catch((error) => {
        setIsloading(false);
        setIserror(true);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response);
          // const error = error.response;
          // alert(error.response.data.error);
          if (error.response.data.error) {
            setErrorMessage(error.response.data.error);
          } else {
            setErrorMessage("Something went wrong");
          }
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
          setErrorMessage("Internal server error");
        }
      });
  }, [id]);
  if (isloading) return <div>Loadingg.....</div>;
  // try {
  //   console.log(data);
  //   alert("Your data is successful");
  // } catch (error) {
  //   if (error.response) {
  //     // The request was made and the server responded with a status code
  //     // that falls out of the range of 2xx
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   } else if (error.request) {
  //     // The request was made but no response was received
  //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //     // http.ClientRequest in node.js
  //     console.log(error.request);
  //   } else {
  //     // Something happened in setting up the request that triggered an Error
  //     console.log("Error", error.message);
  //   }
  // }
  // useEffect((https://public-feed-api.replit.app/api/profiles/${id}`) => {
  //   fetch(``)
  //     .then((responce) => responce.json())
  //     .then((data) => {
  //       console.log(data);
  //       setResponse(data);
  //     })
  //     .catch((error) => console.log("error", error));
  // }, [id]);
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Cover Photo */}
      <div className="relative">
        {setIserror ? <div>{errorMessage}</div> : <></>}
        <img
          src={response.cover}
          alt="cover"
          className="w-full h-64 object-cover"
        />
        {/* Profile Picture */}
        <div className="absolute left-6 -bottom-16">
          <img
            src={response.profile}
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-white object-cover"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="max-w-5xl mx-auto px-4 mt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-bold">{response.name}</h1>
            <p className="text-gray-600">500 friends</p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Add Story
            </button>
            <button className="bg-gray-300 px-4 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 border-b">
          <div className="flex gap-6 text-gray-600">
            <button className="pb-2 border-b-2 border-blue-500 text-blue-500">
              Posts
            </button>
            <button className="pb-2">About</button>
            <button className="pb-2">Friends</button>
            <button className="pb-2">Photos</button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Left Sidebar */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-semibold mb-2">Intro</h2>
            <p className="text-gray-600 text-sm">Frontend Developer</p>
            <p className="text-gray-600 text-sm">Lives in Kathmandu</p>
            <p className="text-gray-600 text-sm">Single</p>
          </div>

          {/* Posts Section */}
          <div className="md:col-span-2 space-y-4">
            {/* Create Post */}
            <div className="bg-white p-4 rounded-2xl shadow">
              <div className="flex items-center gap-3">
                <img
                  src="https://via.placeholder.com/40"
                  className="w-10 h-10 rounded-full"
                  alt=""
                />
                <div className="flex-1 bg-gray-100 px-4 py-2 rounded-full text-gray-500">
                  What's on your mind?
                </div>
              </div>
            </div>

            {/* Post Card */}
            {[1, 2].map((post) => (
              <div key={post} className="bg-white rounded-2xl shadow p-4">
                <div className="flex items-center gap-3">
                  <img
                    src="https://via.placeholder.com/40"
                    className="w-10 h-10 rounded-full"
                    alt=""
                  />
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-xs text-gray-500">2 hrs ago</p>
                  </div>
                </div>

                <p className="mt-3 text-gray-700">
                  This is a sample post content for the Facebook profile UI.
                </p>

                <img
                  src="https://via.placeholder.com/600x300"
                  className="w-full mt-3 rounded-lg"
                  alt=""
                />

                <div className="flex justify-around mt-4 text-gray-600 text-sm">
                  <button>Like</button>
                  <button>Comment</button>
                  <button>Share</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
