import { configureStore,createReducer} from '@reduxjs/toolkit'
const users=[];
const userReducer=createReducer(users, builder=>{
    builder.addCase("ADD_USER",(state,action)=>{
        state.push(action.user);
    })
})
const blogs=[];
const blogReducer=createReducer(blogs,builder=>{
    builder.addCase("ADD_BLOG",(state,action)=>{
        state.unshift(action.blog);
    })
})
export const store=configureStore({reducer:{ usersArr:userReducer, blogArr:blogReducer} }); 