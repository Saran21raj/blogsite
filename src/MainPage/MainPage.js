import './MainPage.css';
import { useState} from 'react';
import { useDispatch,useSelector } from "react-redux";
import { addUser } from '../actionCreators/AddUserAction';
import { useNavigate } from 'react-router-dom';
function MainPage() {
  const [signInValues,setSignInValues]=useState({
    userName:'',
    password:''
  });
  
  const [signUpValues,setSignUpValues]=useState({
    firstName:'',
    middleName:'',
    lastName:'',
    userName:'',
    password:''
  });
  const dispatch=useDispatch();
  const insertUser= useSelector((state)=>state.usersArr);
  console.log(insertUser);
  const navigate=useNavigate();
  const handleChangeSignUp=({target:{name,value}})=>{
    setRegistered(true);
    setSignUpValues(prevState=>({...prevState,[name]:value}));
  }
  const handleChangeSignIn=({target:{name,value}})=>{
    setSignInValues(prevState=>({...prevState,[name]:value}));
  }
  const [isLogged,setIsLogged]=useState(false);
  const changeContent=()=>{
    setIsLogged(prevState=>!prevState);
  }
  const blogObj={
    name:"Siva Chandran",
    title:"Must Known CSS Topics To be a CSS Developer",
    date:{
      month:"Jul",
      date:26,
      year:2022
    },
    description:"Here, I’m going to share the topics that one must know to be a CSS Developer. This article is for all of them no matter what if you are  a beginner in CSS or you may have a considerable amount of experience in writing CSS or you might be a CSS Pro. This article will cover almost all topics in CSS that you  MUST KNOW !!",
    imageTitle:"SC",
    topic:"CSS",
    minRead:"4",
  }
  const [registered,setRegistered]=useState(true);
  const handleSignIn=()=>{
    console.log("Users List",insertUser);
    console.log("SIGNINVALUE",signInValues);
    if(signInValues.userName!=="" && signInValues.password!==""){
      let falseCount=0;
      insertUser.every(user=>{
        if(user.userName===signInValues.userName)
        {
          if(user.userName === signInValues.userName && user.password === signInValues.password)
          {
            console.log("loggedin");
            localStorage.setItem("firstName",user.firstName);
            localStorage.setItem("middleName",user.middleName);
            localStorage.setItem("lastName",user.lastName);
            localStorage.setItem("userId",user.userId);
            navigate("/homepage");
            return false;
          }
          else{
            alert("Username and Password is not Matched");
            return false;
          }
        }
        else{
          falseCount=falseCount+1;
          return true;
        }
      });
      console.log(falseCount);
      if(falseCount===insertUser.length){
        alert("USER NOT FOUND");
      }
      console.log("HII FROM EVERY")
    }
    else{
      alert("Please enter valid details");
    }
  }
  const handleSignUp=()=>{
    if(signUpValues.firstName!=="" && signUpValues.lastName!=="" && signUpValues.password!=="" && signUpValues.userName!==""){
      const userId=insertUser.length+1;
      const users={
        firstName:signUpValues.firstName,
        middleName:signUpValues.middleName,
        lastName:signUpValues.lastName,
        password:signUpValues.password,
        userName:signUpValues.userName,
        userId
      }
      console.log(dispatch(addUser({type:"Push",state:users })));
      setRegistered(false);
      setSignUpValues({userName:"",password:"",lastName:"",firstName:"",middleName:""});
      setTimeout(()=>{
        setIsLogged(true);
      },500);
    }
    else{
      alert("Please Enter All Details");
    }
  }
  return (
    <div className="mainPage">
      <div className='mainPage-left'>
        <div className="div-icon">
          <span className="icon">SR</span>
          <span className='blog-main-title'>BLOGSITE</span>
        </div>
        <div className='blog-div'>
          <div className='blog-inner-div1'>
            <div className='blog-inner-div1-img'>
              <h3>{blogObj.imageTitle}</h3>
            </div>
            <h4 className='blog-inner-div1-name'>{blogObj.name}</h4>
            <div className='blog-inner-div1-date'>
              <p>{blogObj.date.month}</p>
              <p>{blogObj.date.date}</p>
            </div>
          </div>
          <div className='blog-inner-div1-title'>
            <h2>{blogObj.title}</h2>
          </div>
          <div className='blog-inner-div1-description'>
            <p>{blogObj.description}</p>
          </div>
          <div className='blog-inner-div1-details'>
            <h3>{blogObj.topic}</h3>
            <h3>{blogObj.minRead} min read</h3>
          </div>
        </div>
      </div>
          {
            isLogged ? 
            (
            <>
              <div className='signIn-mainPage-right'>
                <div className='signIn-div-outer'>
                  <div className='signIn-div-innerbox1'>
                    <input 
                      name="userName"
                      type="text"
                      value={signInValues.userName}
                      placeholder='Username'
                      className='login-editbox'
                      onChange={handleChangeSignIn}/>
                    <input 
                      name="password"
                      type="password"
                      value={signInValues.password}
                      className='login-editbox'
                      placeholder='Password'
                      onChange={handleChangeSignIn}/>
                    <button className='login-button' onClick={handleSignIn} >Sign In</button>
                  </div>
                  <div className='signIn-div-innerbox2'>
                    <h3 className='user-content'>New User</h3>
                    <button className='create-account-btn' onClick={changeContent}>Create Account</button>
                  </div>
                </div>
              </div>
            </>
            ):
            (
              <>
                <div className='signUp-mainPage-right'>
                  <div className='signUp-outer'>
                    <div className='signUp-div-innerbox1'>
                      <div className='signUp-div-editbox1'>
                        <input 
                          name="firstName"
                          type="text"
                          value={signUpValues.firstName}
                          placeholder='First Name'
                          className='signUp-editbox'
                          onChange={handleChangeSignUp}/>
                        <input 
                          name="middleName"
                          type="text"
                          value={signUpValues.middleName}
                          placeholder='Middle Name'
                          className='signUp-editbox'
                          onChange={handleChangeSignUp}/>
                        <input 
                          name="lastName"
                          type="text"
                          value={signUpValues.lastName}
                          placeholder='Last Name'
                          className='signUp-editbox'
                          onChange={handleChangeSignUp}/>
                      </div>
                      <input
                        name="userName"
                        type="text"
                        value={signUpValues.userName}
                        placeholder='Username'
                        className='signUp-editbox-values'
                        onChange={handleChangeSignUp}/>
                      <input
                        name="password"
                        type="password"
                        value={signUpValues.password}
                        className='signUp-editbox-values'
                        placeholder='Password'
                        onChange={handleChangeSignUp}/>
                      <button className='login-button' onClick={handleSignUp}>Sign Up</button>
                      <h4 className='registered' disabled={registered}>Registered</h4>
                    </div>
                    <div className='signUp-div-innerbox2'>
                      <h3 className='user-content'>Old User</h3>
                      <button className='create-account-btn' onClick={changeContent}>Log In</button>
                    </div>
                  </div>
                </div>
              </>
            )
          }
    </div>
  );
}

export default MainPage;
