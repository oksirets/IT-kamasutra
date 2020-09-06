import React from 'react';
import classes from './ProfileInfo.module.css'

const  ProfileInfo = () => {
    return  <div className = {classes.content}>
    <div>
      <img src = 'https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg'></img>
    </div>
    <div className = {classes.descriptionBlock}>
      ava + description
    </div>
</div>
}

export default ProfileInfo;