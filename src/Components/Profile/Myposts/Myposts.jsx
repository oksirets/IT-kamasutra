import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../Redux/profile-reducer";
import classes from "./Myposts.module.css";
import Post from "./Post/Post";

const Myposts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.likesCount} />
  ));

  let textAreaElement = React.createRef();

  let addPost = () => {
    // let text = textAreaElement.current.value;
    props.dispatch(addPostActionCreator());
    // textAreaElement.current.value = " ";
  };

  let changePostText = () => {
    let text = textAreaElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.postsBlock}>
      My posts
      <div>
        <div>
          <textarea
            ref={textAreaElement}
            onChange={changePostText}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default Myposts;
