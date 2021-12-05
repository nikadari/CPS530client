import React from "react";
import "./Posts.css";
// import Profile from "@material-ui/core/Avatar";
import { useState } from "react";
import likeImg from "../resources/like.png";

function Posts({
  username,
  caption,
  imgLocation,
  avatar,
  username2,
  comment,
  username3,
  comment1,
}) {
  /*state variables needed for likes */
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  /* set state function, determines if like button is pressed or not */
  const likeEvent = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="posts">
      {/*header -> profile pic and username */}
      <div className="profile_header">
        <img className="profile_pic" alt="Person" src={avatar} />
        <h3>{username}</h3>
      </div>
      {/*image */}
      <img className="post_image" src={imgLocation} alt=""></img>

      <div className="CaptionLike">
        <img className="likeBtn" src={likeImg} onClick={likeEvent} />
        <h4 className="Caption">
          <strong>{likes} likes </strong>
        </h4>
      </div>

      {/*username + caption + comments*/}
      <h4 className="Caption">
        <strong>{username}</strong> {caption}
      </h4>
      <h5 className="Caption">
        <strong>{username2}</strong> {comment}
      </h5>
      <h6 className="Caption">
        <strong>{username3}</strong> {comment1}
      </h6>
    </div>
  );
}

export default Posts;
