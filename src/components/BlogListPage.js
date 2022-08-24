import React from 'react'
import { Link } from 'react-router-dom'
import Bloglist from './Bloglist'

const BlogListPage = () => {
    return (
        <div>
            <p> Blog List</p>
            <Bloglist/>
            {/* <Link to="/blogs/1">Blog 1</Link>
            <Link to="/blogs/2">Blog 2</Link> */}
        </div>
    )
}

export default BlogListPage
