import {FETCH_POSTS,NEW_POST} from './types';

//thunk middleware allows us to actually call the dispatch functions directly so that we can make the synchronous
//request
export const fetchPosts=()=>dispatch=>{
    console.log("fetching");
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>
            dispatch({
            type:FETCH_POSTS,
            payload:posts
        }));
};
/*
export function fetchPosts(){
    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(posts=>dispatch({
            type:FETCH_POSTS,
            payload:posts
        }));
    }
};
*/
export const createPost=(postData)=>dispatch=>{
    console.log("action called post data");
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(postData)
    }).then(res=>res.json())
    .then(post=>dispatch({
        type:NEW_POST,
        payload:post
    }));
};