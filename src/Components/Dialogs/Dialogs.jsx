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
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <DialogItem name = 'Oksi' id = '1' />
                <DialogItem name = 'Olha' id = '2' />
                <DialogItem name = 'Kate' id = '3' />
                <DialogItem name = 'Alla' id = '4' />
                <DialogItem name = 'Yana' id = '5' />
                <DialogItem name = 'Tanya' id = '6' />
            </div>
            <div className = {classes.messages}> 
                <Message message = 'Hi' />
                <Message message = ' How are you?' />
                <Message message = "It's good!" />
                <Message message = 'Yo' />
                <Message message = 'Yo' />         
            </div>
        </div>
    )
}

export default Dialogs