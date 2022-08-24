import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import AppRouter from './routers/AppRouter';
import "./App.css"
import configureStore from './store/configureStore';
import { addBlog,removeBlog,editBlog  } from './actions/blogs'


const store = configureStore();



store.subscribe(()=> {//subscribe : state de değişiklik olursa çalısır
    console.log(store.getState());
})
const blog1 = store.dispatch(addBlog({title: 'blog title 1', description: 'blog description 1'}))
const blog2 = store.dispatch(addBlog({title: 'blog title 2', description: 'blog description 2', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog title 3', description: 'blog description 3', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog title 4', description: 'blog description 3', dateAdded: Date.now()}))
store.dispatch(addBlog({title: 'blog title 5', description: 'blog description 3', dateAdded: Date.now()}))

console.log(store.getState());


ReactDOM.render(
<Provider store = {store}>
 <AppRouter/>
</Provider> , document.getElementById('root'));

serviceWorker.unregister();
