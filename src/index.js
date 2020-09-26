import './index.css';
import state, { addPost } from './Redux/State';
import { rerenderEntireTree } from './render';

rerenderEntireTree(state);
