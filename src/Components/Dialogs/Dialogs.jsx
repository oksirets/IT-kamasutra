import React from "react";
import classes from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addDialogActionCreator,
  updateNewDialogActionCreator,
} from "../../Redux/store";

const Dialogs = (props) => {
  let dialogsElements = props.messages.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} url={dialog.url} />
  ));

  let messagesElements = props.messages.messages.map((message) => (
    <Message message={message.message} />
  ));

  let newDialog = React.createRef();

  let addNewDialog = () => {
    // let dialog = newDialog.current.value;
    props.dispatch(addDialogActionCreator());
  };

  let onChangeDialog = () => {
    let text = newDialog.current.value;
    props.dispatch(updateNewDialogActionCreator(text));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <div className={classes.newDialog}>
          <textarea
            ref={newDialog}
            onChange={onChangeDialog}
            value={props.messages.newMessage}
          ></textarea>
        </div>
        <div>
          <button onClick={addNewDialog}>Add dialog</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
