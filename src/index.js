import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import "./App.css"

import { createStore, combineReducers } from 'redux'
import { v4 as uuid } from 'uuid';

// const state = {
//     blogs: [
//         {
//             id: 1,
//             title: 'blog title 1',
//             description: 'blog description 1',
//             dateAdded: 0
//         }
//     ],
//     auth: {
//         userid: 1,
//         username: 'sadikturan',
//         email: 'info@sadikturan.com'
//     }
// }

// ACTION CREATOR
const addBlog = ({ title='', description='',dateAdded=0 }) => ({
    type: "ADD_BLOG",
    blog: {
        id: uuid(),//npm i uuid
        title: title,
        description: description,
        dateAdded: dateAdded
    }
})


const removeBlog = ({ id }) => (
    {
        type: "REMOVE_BLOG",
        id: id
    }
)
const editBlog = (id,updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
})

const blogState = []

const blogReducer = (state = blogState, action) => {
    switch (action.type) {
        case "ADD_BLOG":
            return [
                ...state,//...state demek state listesi içindeki herseyi al demek
                action.blog
            ]
            case "REMOVE_BLOG":
            return state.filter(({ id }) => {
                return id !== action.id;
            })
            case "EDIT_BLOG":
            return state.map((blog) => {
                if(blog.id === action.id) {
                    return {
                        ...blog,
                        ...action.updates
                    }
                } else {
                    return blog;
                }
            })
        default:
            return state;
    }
}

const authState = {};

const authReducer = (state = authState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(
    // combineReducers = reducersları birşetrip store içine atar
    combineReducers({
        blogs: blogReducer,
        auth: authReducer
    })
);

store.subscribe(()=> {//subscribe : state de değişiklik olursa çalısır
    console.log(store.getState());
})

const blog1 = store.dispatch(addBlog({title: 'blog title 1', description: 'blog description 1'}))
const blog2 = store.dispatch(addBlog({title: 'blog title 2', description: 'blog description 2', dateAdded: Date.now()}))

store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id, { title: 'updated blog title', description: 'updated blog description' }))

console.log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById('root'));


serviceWorker.unregister();
