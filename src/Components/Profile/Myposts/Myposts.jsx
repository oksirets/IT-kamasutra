import React from 'react';
import classes from './Myposts.module.css'
import Post from './Post/Post';

const  Myposts = () => {
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
    <Post message = 'Hi, how are you?' like = '15'/>
    <Post  message = 'Hi, I`m fine' like = '20'/>
    </div>
</div>
}

export default Myposts;