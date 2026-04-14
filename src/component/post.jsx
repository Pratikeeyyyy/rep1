import { useEffect, useState } from "react";
// import { Link } from "react-router";
import { Link } from "react-router-dom";
import Newpost from "./newpost";
// export const themeContext = createContext({});

function Post(props) {
  const [like, setLike] = useState(0);
  function likeCount() {
    setLike((like) => like + 1);
    settotallikes((globallike) => globallike + 1);
  }
  // function setDarktheme(){

  // }
  const [viewComment, setViewComment] = useState(false);
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Sita",
      image:
        "https://images.unsplash.com/photo-1680355466468-bd0a68b11fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      usercomment: "Nice post!",
    },
    {
      id: 2,
      name: "Hari",
      image:
        "https://images.unsplash.com/photo-1680355466468-bd0a68b11fa0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYW5rJTIwcHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      usercomment: "Awesome",
    },
  ]);

  function seeComment() {
    setViewComment((viewComment) => !viewComment);
    console.log(viewComment);
  }

  function addComment(e) {
    e.preventDefault(); //page reload garna bata rokxa
    const Comment = e.target.inputcomment1.value;
    const newComment = {
      name: "Praatik",
      image:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
      usercomment: Comment,
    };
    setComments((comments) => [...comments, newComment]);
    console.log(Comment);
    console.log("hello");
    console.log(e);
  }
  const name = props.name;
  const caption = props.caption;
  const image = props.image;
  const profile =
    props.avatar ||
    "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";

  const time = props.time;
  const settotallikes = props.settotallikes;
  const idforall = props.id;
  console.log(idforall, "id prop");

  function newLink() {
    console.log(newLink);
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4">
      {/* Post Header */}

      <div className="flex items-center px-4 py-3">
        <Link to={`/facebookprofileui/${idforall}`}>
          {" "}
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={profile}
            alt="User"
            onClick={newLink}
          />
        </Link>
        <div className="ml-3">
          <span className="text-gray-800 font-semibold">{name}</span>
          <p className="text-gray-500 text-sm">{time}</p>
        </div>
      </div>
      {/* Post Caption */}
      <div className="px-4 py-2">
        <p className="text-gray-700">{caption}</p>
      </div>

      {/* Post Image */}
      {image ? (
        <div>
          <img className="w-full h-64 object-cover" src={image} alt="Post" />
        </div>
      ) : (
        <div></div>
      )}

      {/* Post Actions */}
      <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 10a6 6 0 0112 0 6 6 0 01-12 0z" />
          </svg>
          <button onClick={likeCount}>Like</button>

          <span>{like}</span>
        </button>
        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 5h16v10H2z" />
          </svg>
          <button onClick={seeComment}>Comment</button>
        </button>
          {/* <span>{viewComment}</span> */}

        <button classNam
        e="flex items-center space-x-1 text-gray-600 hover:text-blue-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5 4l10 6-10 6V4z" />
          </svg>
          <span>Share</span>
        </button>
      </div>
      {viewComment ? (
        <div>
          {/* Comment Input */}
          <div className="px-4 py-3 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <form onSubmit={addComment}>
                <input
                  type="text"
                  name="inputcomment1"
                  placeholder="Write a comment..."
                  className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600"
                >
                  Post
                </button>
              </form>
            </div>
          </div>

          {/* Comments Section */}

          <div className="px-4 pb-4 space-y-2">
            {/* Single Comment */}
            {comments.map((commentofusers) => {
              return (
                <div className="flex items-start space-x-2">
                  <img
                    className="h-8 w-8 rounded-full"
                    src={commentofusers.image}
                  />
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <p className="text-sm font-semibold">
                      {commentofusers.name}
                    </p>
                    <p className="text-sm text-gray-700">
                      {commentofusers.usercomment}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Post;
