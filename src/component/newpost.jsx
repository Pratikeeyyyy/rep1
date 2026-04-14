import { useState } from "react";
function Newpost({ addPost }) {
  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // this is fro handling submiit
  function handleSubmit(e) {
    e.preventDefault();

    const newPost = {
      id: 1,
      name: "Pratik Pangeni",
      time: "Just now",
      caption: caption,
      imageurl: imageUrl,
      avatar:
        "https://thumbs.dreamstime.com/z/portrait-cute-longhair-cat-looks-curious-away-horizontal-imae-selective-focus-portrait-cute-longhair-cat-looks-curious-318973446.jpg?ct=jpeg",
    };

    addPost(newPost);

    // clear inputs
    setCaption("");
    setImageUrl("");
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow rounded my-4">
      {/*submit handling */}
      <form onSubmit={handleSubmit}>
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Write caption"
          className="w-full border p-2 rounded mb-3"
        />

        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image URL"
          className="w-full border p-2 rounded mb-3"
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default Newpost;
