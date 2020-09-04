import React from 'react';
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <div className = {classes.dialog + ' ' + classes.active}>
                    Oksi
                </div>
                <div className = {classes.dialog}>
                    Olha
                </div>
                <div className = {classes.dialog}>
                    Kate
                </div>
                <div className = {classes.dialog}>
                    Alla
                </div>
                <div className = {classes.dialog}>
                    Yana
                </div>
                <div className = {classes.dialog}>
                    Tanya
                </div>
            </div>
            <div className = {classes.massages}> 
                <div className = {classes.massage}>
                    Hi
                </div>
                <div className = {classes.massage}>
                    How are you?
                </div>
                <div className = {classes.massage}>
                    It's good!
                </div>            
            </div>
        </div>
    )
}

export default Dialogs