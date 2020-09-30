const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_DIALOG = "ADD-DIALOG";
const UPDATE_NEW_DIALOG = "UPDATE-NEW-DIALOG";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: "20" },
        { id: 2, message: "Hi, I`m fine", likesCount: "25" },
      ],

      newPostText: "",
    },

    dialogsPage: {
      dialogs: [
        {
          id: 1,
          name: "Oksi",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjQVQzjAf0JHrRrRP33-BUTS9Zsf2q2uiaZQ&usqp=CAU",
        },
        {
          id: 2,
          name: "Olha",
          url:
            "https://chto-takoe-lyubov.net/wp-content/uploads/2019/11/Barash-zagadki.jpg",
        },
        {
          id: 3,
          name: "Kate",
          url: "https://www.toybytoy.com/file/0003/600/2874.jpg",
        },
        {
          id: 4,
          name: "Alla",
          url: "https://www.toybytoy.com/file/0003/600/2872.jpg",
        },
        {
          id: 5,
          name: "Yana",
          url:
            "https://vokrug-tv.ru/pic/person/e/0/3/1/e031d4c223bfd8cc4037bc8948b6a8d8.jpeg",
        },
        {
          id: 6,
          name: "Tanya",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQxYX7NgOsOCVjs9DgsF75FsY9OqHEeyMXKg&usqp=CAU",
        },
      ],

      newMessage: "",

      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "It's good!" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" },
      ],
    },
  },

  _callSubscriber() {},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  // add() {
  //   let newDialog = {
  //     id: 7,
  //     name: this._state.dialogsPage.newMessage,
  //   };

  //   this._state.dialogsPage.messages.push(newDialog);
  //   this._callSubscriber(this._state);
  // },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";

      this._callSubscriber(this._state);
    } else if (action.type === ADD_DIALOG) {
      let newDialog = {
        id: 6,
        message: this._state.dialogsPage.newMessage,
      };
      this._state.dialogsPage.messages.push(newDialog);
      this._state.dialogsPage.newMessage = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.postText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_DIALOG) {
      this._state.dialogsPage.newMessage = action.dialogText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const addDialogActionCreator = () => ({ type: ADD_DIALOG });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  postText: text,
});

export const updateNewDialogActionCreator = (text) => ({
  type: UPDATE_NEW_DIALOG,
  dialogText: text,
});

export default store;
window.store = store;
