import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const SHOW_POSTS = "SHOW_POSTS";
export const DELETE_POST = "DELETE_POST";


const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=AHMAD";

//ActionCreator
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  //action
  return {
    type: FETCH_POSTS,
    payload: request
  };
}


//ActionCreator
export function createPost(values, callback){
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`,values)
  .then(()=> callback());
  //action
  return {
    type: CREATE_POSTS,
    payload: request
  };
}

export function showPosts(id){
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
  //action
  return {
    type: SHOW_POSTS,
    payload: request
  };
}


export function deletePost(id, callback){
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(()=> callback());;
  //action
  return {
    type: DELETE_POST,
    payload: id
  };
}
