export const ADD_BLOG='ADD_BLOG';



export const addBlog=(obj)=>({
type:ADD_BLOG,
blog:obj.state
}
); 