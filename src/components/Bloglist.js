import React from 'react'
import { connect } from 'react-redux'
import Bloglistitem from  './Bloglistitem';

const Bloglist = (props) => {
    console.log(props)
  return (
    // <div>{props.blogs.length}</div>
    <ul>
        {props.blogs.map(blog=>{
            return <Bloglistitem key={blog.id} {...blog} />
        })}
    </ul>
  )
}
const mapStateToProps = (state) => {
    return {
    blogs : state.blogs
    }
}

export default connect(mapStateToProps)(Bloglist)
//Bloglist const metod adı