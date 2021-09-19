import axios from 'axios';

const getPostsUrl='http://localhost:5000/posts';
const newPostsUrl='http://localhost:5000/newpost'

export const fetchPosts = () => axios.get(getPostsUrl);

export const createPost = (newPost) => axios.post(newPostsUrl,newPost);

