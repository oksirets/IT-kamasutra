import React from 'react';
import classes from './Myposts.module.css'
import Post from './Post/Post';

const  Myposts = () => {
    return  <div className = {classes.posts}>
    <div >
      My posts
      <div>
        <textarea> </textarea>
        <button>Add post</button>
      </div>
    <Post message = 'Hi, how are you?' like = '15'/>
    <Post  message = 'Hi, I`m fine' like = '20'/>
    </div>
</div>
}

export default Myposts;