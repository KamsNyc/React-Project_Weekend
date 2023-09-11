import React, { useState, useEffect } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import { CalendarViewDay, EventNote, Subscriptions } from "@mui/icons-material";
import Post from "./Post.js";
import { db } from "./firebase.js";
import { auth } from "./firebase.js";

function Feed() {
  const [posts, setPosts] = useState([]);

  console.log(db)
  console.log(auth)


  //pervents refresh after click
  const sendPost = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>

        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />

          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />

          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />

          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}
      {posts.map((post) => (
        <Post />
      ))}

      <Post
        name={"Kamel Singh"}
        description={"This is a test"}
        message={"WOW this worked"}
      />
    </div>
  );
}

export default Feed;
