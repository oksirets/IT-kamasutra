import React from 'react';
import classes from './Profile.module.css'
import Myposts from './Myposts/Myposts';

const  Profile = () => {
    return  <div className = {classes.content}>
    Main content
    <div>
      <img src = 'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'></img>
    </div>
    <div>
      ava + description
    </div>
    <Myposts />
</div>
}

export default Profile;