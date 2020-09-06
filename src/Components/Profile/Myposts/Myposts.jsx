import React from 'react';
import classes from './Myposts.module.css'
import Post from './Post/Post';

const  Myposts = () => {
  let postsData = [
    {id: 1,  message: 'Hi, how are you?', likesCount: '20'},
    {id: 2,  message: 'Hi, I`m fine', likesCount: '25'},
  ]

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
    <Post message = {postsData[0].message} like = {postsData[0].likesCount}/>
    <Post message = {postsData[1].message} like = {postsData[1].likesCount} />
    </div>
</div>
}

export default Myposts;