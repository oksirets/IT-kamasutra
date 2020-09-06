import React from 'react';
import classes from './Profile.module.css'
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const  Profile = () => {
    return  <div>
    <ProfileInfo />
    <Myposts />
</div>
}

export default Profile;