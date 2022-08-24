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
export const addBlog = ({ title='', description='',dateAdded=0 }) => ({
    type: "ADD_BLOG",
    blog: {
        id: uuid(),//npm i uuid
        title: title,
        description: description,
        dateAdded: dateAdded
    }
})


export const removeBlog = ({ id }) => (
    {
        type: "REMOVE_BLOG",
        id: id
    }
)
export const editBlog = (id,updates) => ({
    type: "EDIT_BLOG",
    id,
    updates
})