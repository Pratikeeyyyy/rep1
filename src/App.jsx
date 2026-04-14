import { useEffect, useState } from "react";
import TotalLikes from "./component/TotlLikes.jsx";
import Post from "./component/post.jsx";
import Newpost from "./component/newpost.jsx";
import axios from "axios";
import ThemeProvider from "./Context/themeContext.jsx";
import Header from "./component/header.jsx";
import apiClient from "./api.js";
export default function App() {
  const [togglethetheme, setToggletheme] = useState("dark");
  const [totallikes, settotallikes] = useState(0);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const token1 = localStorage.getItem("token");
    console.log(token1);

    apiClient
      .get("/posts?page=1&limit=8", {
        headers: {
          Authorization: `Bearer ${token1}`,
        },
      })
      .then((responceforpost) => {
        console.log(responceforpost);
        setPosts(responceforpost.data.data.posts);
      });
    // .catch((error) => console.log(error));
  }, []);
  // fetching data from api and using posts from there api is "curl https://your-domain.replit.app/api/posts?page=1&limit=5"
  // {
  //   id: 2,
  //   name: "Pratik Pangeni",
  //   time: "12hrs ago",
  //   imageurl:
  //     "https://thumbs.dreamstime.com/b/cchatrapti-sambhaji-maharaj-most-courageous-king-maratha-empire-sabhaji-son-shivaji-imae-take-tulapur-166671501.jpg?w=768",
  //   caption: "Hello",
  //   avatar:
  //     "https://thumbs.dreamstime.com/z/portrait-cute-longhair-cat-looks-curious-away-horizontal-imae-selective-focus-portrait-cute-longhair-cat-looks-curious-318973446.jpg?ct=jpeg",
  // },
  // {
  //   id: 1,
  //   name: "Manishdai",
  //   time: "13hrs ago",
  //   imageurl:
  //     "https://thumbs.dreamstime.com/b/pickleball-hand-simple-photographic-imae-holding-clipping-path-ball-included-34279685.jpg?w=768",
  //   caption: "How are you",
  //   avatar:
  //     "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Imae_Station_7.JPG/960px-Imae_Station_7.JPG",
  // },
  // {
  //   id: 3,
  //   name: "Sanketdai",
  //   time: "35minutes ago",
  //   caption: "YES its me",
  //   avatar:
  //     "https://thumbs.dreamstime.com/b/detail-palazzo-dei-priori-volterra-9755036.jpg?w=768",
  //   imageurl:
  //     "https://thumbs.dreamstime.com/b/composite-trend-artwork-sketch-imae-collage-miniature-silhouette-team-young-man-woman-ride-office-armchair-down-nature-sand-324716813.jpg?w=768",
  // },
  // {
  //   id: 4,
  //   name: "Hari Bahadur",
  //   time: "45minnutes ago",
  //   caption: "this is first post",
  //   avatar:
  //     "https://thumbs.dreamstime.com/b/funny-tuxedo-cat-sitting-window-shelf-loking-camera-funny-tuxedo-cat-sitting-window-shelf-420828172.jpg?w=768",
  //   imageurl:
  //     "https://thumbs.dreamstime.com/b/pair-wood-anemone-wild-flowers-two-spring-love-macro-soft-focus-imae-shallow-dof-giving-artistic-romantic-look-140668452.jpg?w=768",
  // },

  // // this is function for adding new post
  function addPost(newPost) {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  }

  return (
    // <ThemeProvider>
    <div>
      {/* <div className={dark ? "" : ""}>
          <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
            <Navbar toggle={() => setDark(!dark)} />
            <Home />
            <Footer />
          </div>
        </div> */}
      <TotalLikes totalLikes={totallikes} />

      {/*  post ko component */}
      <Newpost addPost={addPost} />

      {/* display newpost  */}
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.postedBy}
          image={post.imageUrl}
          time={post.postedAt}
          caption={post.caption}
          avatar={post.avatar}
          settotallikes={settotallikes}
          id={post.id}
        />
      ))}
    </div>
    // </ThemeProvider>
  );
}
