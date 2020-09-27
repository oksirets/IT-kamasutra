import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/store";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={store.addPost.bind(store)}
        addDialog={store.addDialog.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
