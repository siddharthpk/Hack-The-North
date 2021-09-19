import axios from 'axios';

const getPostsUrl='https://hack-the-north-server.herokuapp.com/posts';
const newPostsUrl='https://hack-the-north-server.herokuapp.com/newpost'

export const fetchPosts = () => axios.get(getPostsUrl);

export const createPost = (newPost) => axios.post(newPostsUrl,newPost);

