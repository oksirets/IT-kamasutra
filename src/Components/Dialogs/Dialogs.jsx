import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
     
    let dialogsElements = props.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id} url={dialog.url}/>
    )

    let messagesElements = props.messages.map(
        message => <Message message={message.message} />
    )

    let newDialog = React.createRef();
    
    let addNewDialog = () => {
        let dialog = newDialog.current.value;
        alert(dialog);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}> 
                {messagesElements}
                <div className={classes.newDialog}>
                    <textarea ref={newDialog}></textarea>
                </div>
                <div>
                    <button onClick={addNewDialog}>Add dialog</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs