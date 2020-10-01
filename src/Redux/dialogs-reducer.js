const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DIALOG = "UPDATE-NEW-DIALOG";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_DIALOG:
      let newDialog = {
        id: 6,
        message: state.newMessage,
      };
      state.messages.push(newDialog);
      state.newMessage = "";
      return state;
    case UPDATE_NEW_DIALOG:
      state.newMessage = action.dialogText;
      return state;
    default:
      return state;
  }
};

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });

export const updateNewDialogActionCreator = (text) => ({
  type: UPDATE_NEW_DIALOG,
  dialogText: text,
});

export default dialogsReducer;
