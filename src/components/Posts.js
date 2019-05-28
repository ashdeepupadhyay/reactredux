import React, { Component } from 'react';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPosts} from '../actions/postActions'
class Posts extends Component {
/*
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>this.setState({posts:data}));
    }
*/
componentWillMount(){
    this.props.fetchPosts();
}

componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
       this.props.posts.unshift(nextProps.newPost);//adding in front of a list
       //this.props.posts.push(nextProps.newPost);//adding to a end of a list

    }
}
/*
    render() {
        const postItems=this.state.posts.map(post=>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
        <div>
            <h1>Posts</h1>
            {postItems}
        </div>
        )
    }
}
*/
render() {
    const postItems=this.props.posts.map(post=>(
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));
    return (
    <div>
        <h1>Posts</h1>
        {postItems}
    </div>
    )
}
}

Posts.propTypes={
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost:PropTypes.object
}
const mapStateToProps = state =>({
    posts:state.posts.items,//because in index.js in reducers we have used posts
    newPost:state.posts.item
})
//export default Posts;
export default connect(mapStateToProps,{fetchPosts})(Posts)//coonect(map our state to the properties)