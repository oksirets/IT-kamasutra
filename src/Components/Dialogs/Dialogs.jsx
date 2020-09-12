import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className = {classes.dialog + ' ' + classes.active}>
            <NavLink to = {"/Dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className = {classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    let dialogs = [
        {id: 1, name: 'Oksi'},
        {id: 2, name: 'Olha'},
        {id: 3, name: 'Kate'},
        {id: 4, name: 'Alla'},
        {id: 5, name: 'Yana'},
        {id: 6, name: 'Tanya'},
    ]

    
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: "It's good!"},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
    ]

    let dialogsElements = dialogs.map(
        dialog => <DialogItem name = {dialog.name} id = {dialog.id} />
    )

    let messagesElements = messages.map (
        message => <Message message = {message.message} />
    )
    
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className = {classes.messages}> 
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs