import React from 'react';
import classes from './Myposts.module.css'
import Post from './Post/Post';

const  Myposts = (props) => {

  let postsElements = props.posts.map (
    p => <Post message = {p.message} like = {p.likesCount}/>
  )

    return  <div className = {classes.postsBlock}>
      My posts
      <div>
        <div>
          <textarea> </textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    <div className = {classes.posts
    }>
    {postsElements}
    </div>
</div>
}

export default Myposts;