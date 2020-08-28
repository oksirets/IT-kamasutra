import React from 'react';
import classes from './Post.module.css'

const  Post = (props) => {
    return  (
      <div className = {classes.item}>
        <img src = 'https://avatarko.ru/img/kartinka/32/prikol_ponchik_31251.jpg' />
        {props.message}
        <div>
    <span>{props.like} likes</span>
        </div>
      </div>
    )
}

export default Post;