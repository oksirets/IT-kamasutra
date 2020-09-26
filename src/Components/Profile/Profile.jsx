import React from 'react';
import classes from './Profile.module.css'
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const  Profile = (props) => {
    return  <div>
    <ProfileInfo />
    <Myposts posts={props.posts}  addPost={props.addPost}/>
</div>
}

export default Profile;