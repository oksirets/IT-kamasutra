import { rerenderEntireTree } from "../render";

let state = {
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
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "It's good!" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
    ],
  },
};

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (postText) => {
  state.profilePage.newPostText = postText;
  rerenderEntireTree(state);
};

export let addDialog = (dialog) => {
  let newDialog = {
    id: 7,
    name: dialog,
    url:
      "https://lh3.googleusercontent.com/proxy/cARTu0b67jP8eivlpGqkqx2PgVfEy3erEdsZc1iThQrTuLM0f75UdvDWsFPw6_Z6Nn9ISAP4uwJdCTO6om3-CZ7eK2vkeNL0r_8J81ClNg_ndyIH3XpqwjDnAXMA9N5Sno_PguUltgOhqiOzbiE5DCedI2k7q8Gp7g",
  };

  state.dialogsPage.dialogs.push(newDialog);
  rerenderEntireTree(state);
};

export default state;
