export const ADD_USER='ADD_USER';



export const addUser=(obj)=>({
type:ADD_USER,
user:obj.state
}
); 