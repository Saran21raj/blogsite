import "./HomePage.css";
import Header from "../Header/Header";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addBlog } from "../actionCreators/AddBlogAction";
function HomePage(){
    const [blogDetails,setBlogDetails]=useState(
        {
            blogTitle:'',
            description:'',
            mainTopic:'',
            minRead:'',
            title1:"",
            titleDescription1:"",
            title2:"",
            titleDescription2:"",
            title3:"",
            titleDescription3:"",
        }
    )
    const dispatch=useDispatch();
    const blogList= useSelector((state)=>state.blogArr);
    console.log(blogList);
    const firstName=localStorage.getItem("firstName");
    const middleName=localStorage.getItem("middleName");
    var date = new Date();
    const time= new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();
    const [counterAddTitle,setCounterAddTitle]=useState(true);
    date =  dd + '-' + mm + '-' + yyyy;
    const handleChangeSignIn=({target:{name,value}})=>{
        setBlogDetails(prevState=>({...prevState,[name]:value}));
    }
    const handleSubmit=()=>{
        if(blogDetails.blogTitle!=="" && blogDetails.description!=="" && blogDetails.mainTopic!=="" && blogDetails.minRead!=="" && blogDetails.title1!=="" && blogDetails.titleDescription1!==""){
            const userId=localStorage.getItem("userId");
            const imageTitle=localStorage.getItem("imageTitle");
            const blogCount=blogList.length+1;
            const blog={
                firstName,
                middleName,
                blogDate:date,
                blogDetails,
                userId,
                imageTitle,
                time,
                blogCount
            }
            console.log(dispatch(addBlog({type:"Push",state:blog })));
            setBlogDetails({blogTitle:"",description:"",mainTopic:"",minRead:"",title1:"",title2:"",title3:'',titleDescription1:"",titleDescription2:"",titleDescription3:""});
            window.scrollTo({
                top:100,
                left:100,
                behavior:"smooth"
            });
        }
          else{
            alert("Please Enter All Details");
          }
    }
    const addTitle=()=>{
        const showAdditionalContents=document.querySelector(".additional-contents");
        showAdditionalContents.style.display="block";
        setCounterAddTitle(false);
    }
    const removeTitle=()=>{
        const showAdditionalContents=document.querySelector(".additional-contents");
        showAdditionalContents.style.display="none";
        setCounterAddTitle(true);
        window.scrollTo({
            top:100,
            left:100,
            behavior:"smooth"
        });
    }
    const handleModal=(id)=>{
        console.log(id);
        const open=document.getElementById(id);
        open.style.display="flex";
    }
    const handleCloseModal=(id)=>{
        const close=document.getElementById(id);
        close.style.display="none";
    }
    return (
        <>
        <Header/>
        <div className="homepage-outer">
            <div className="homepage-create-blog">
                <div className="homepage-create-blog-inner">
                    <h1 className="homepage-create-blog-title">Create Blog</h1>
                    <div className="homepage-create-blog-name-div">
                        <h2>Name : </h2>
                        <h2>{firstName}</h2>
                        {
                            middleName!=="" ? <h2>{middleName}</h2> : <></>
                        }
                    </div>
                    <div className="homepage-create-blog-date-div">
                        <h2>Date : </h2>
                        <h2>{date}</h2>
                    </div>
                    <div className="homepage-create-blog-title-div">
                        <h2>Blog-Title : </h2>
                        <input 
                            name="blogTitle"
                            type="text"
                            value={blogDetails.blogTitle}
                            placeholder='Title'
                            className='blog-editbox'
                            onChange={handleChangeSignIn}/>
                    </div>
                    <div className="homepage-create-blog-shrt-description-div">
                        <h2>Short-Description :</h2>
                        <textarea 
                            name="description"
                            type="text"
                            value={blogDetails.description}
                            placeholder='Description'
                            className="shrt-desp-textarea"
                            onChange={handleChangeSignIn}/>
                    </div>
                    <div className="homepage-create-blog-title-div">
                        <h2>Topic : </h2>
                        <input 
                            name="mainTopic"
                            type="text"
                            value={blogDetails.mainTopic}
                            placeholder='Topic'
                            className='blog-editbox'
                            onChange={handleChangeSignIn}/>
                    </div>
                    <div className="homepage-create-blog-title-div">
                        <h2>Min to read : </h2>
                        <input 
                            name="minRead"
                            type="text"
                            value={blogDetails.minRead}
                            placeholder='Time to read'
                            className='blog-editbox'
                            onChange={handleChangeSignIn}/>
                    </div>
                    <div className="homepage-create-blog-title-div">
                        <h2>Title 1: </h2>
                        <input 
                            name="title1"
                            type="text"
                            value={blogDetails.title1}
                            placeholder='Enter your Title'
                            className='blog-editbox'
                            onChange={handleChangeSignIn}/>
                    </div>
                    <div className="homepage-create-blog-shrt-description-div">
                        <h2>Description : </h2>
                        <textarea 
                            name="titleDescription1"
                            type="text"
                            value={blogDetails.titleDescription1}
                            placeholder='Description'
                            className="description-textarea"
                            onChange={handleChangeSignIn}/>
                    </div>
                    <div className="additional-contents">
                        <div className="homepage-create-blog-title-div">
                            <h2>Title 2: </h2>
                            <input 
                                name="title2"
                                type="text"
                                className='blog-editbox'
                                value={blogDetails.title2}
                                placeholder="Enter Your Title"
                                onChange={handleChangeSignIn}/>
                        </div>
                        <div className="homepage-create-blog-shrt-description-div">
                            <h2>Description : </h2>
                            <textarea 
                                name="titleDescription2"
                                type="text"
                                value={blogDetails.titleDescription2}
                                placeholder='Description'
                                className='description-textarea'
                                onChange={handleChangeSignIn}/>
                        </div>
                        <div className="homepage-create-blog-title-div">
                            <h2>Title 3 : </h2>
                            <input 
                                name="title3"
                                type="text"
                                className='blog-editbox'
                                value={blogDetails.title3}
                                placeholder="Enter your Title"
                                onChange={handleChangeSignIn}/>
                        </div>
                        <div className="homepage-create-blog-shrt-description-div">
                            <h2>Description : </h2>
                            <textarea 
                                name="titleDescription3"
                                type="text"
                                value={blogDetails.titleDescription3}
                                placeholder='Description'
                                className='description-textarea'
                                onChange={handleChangeSignIn}/>
                        </div>
                    </div>
                    <div className="homepage-create-blog-addTitle-div">
                        <button className="submit-btn" onClick={handleSubmit}>
                            <span>S</span>
                            <span>U</span>
                            <span>B</span>
                            <span>M</span>
                            <span>I</span>
                            <span>T</span>
                        </button>
                        {
                            counterAddTitle ? 
                            <button className="add-title-btn" onClick={addTitle}>+</button>
                            :
                            <button className="add-title-btn" onClick={removeTitle}>-</button>
                        }
                    </div>
                </div>
            </div>
            <div className="homepage-view-blog">
                {
                    blogList.length!==0 ? 
                    (
                    <>
                    {
                        blogList.map((list)=>(
                            <>
                            <div className='homepage-view-blog-outer-div' onClick={()=>{handleModal(list.blogCount)}}>
                                <div className='homepage-view-blog-inner-div'>
                                    <div className='homepage-view-blog-inner-div1'>
                                        <div className='homepage-view-blog-inner-imgtitle-div'>
                                            <h4>{list.imageTitle}</h4>
                                        </div>
                                        <h4 className='blog-first-name'>{list.firstName}</h4>
                                        <h4 className='blog-first-name'>{list.middleName}</h4>
                                        <h4 className='blog-first-name'>{list.blogDate}</h4>
                                        <h4 className='blog-first-name'>{list.time}</h4>
                                    </div>
                                    <div className="homepage-view-blog-inner-div2">
                                        <h3 className='blog-title'>{list.blogDetails.blogTitle}</h3>
                                    </div>
                                    <div className="homepage-view-blog-inner-div3">
                                        <p className='blog-title'>{list.blogDetails.description}</p>
                                    </div>
                                    <div className="homepage-view-blog-inner-div4">
                                        <h4 className='blog-first-name'>{list.blogDetails.mainTopic}</h4>
                                        <h4 className='blog-first-name'>{list.blogDetails.minRead} min read</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="homepage-view-blog-modal" id={list.blogCount}>
                                <div className="blog-modal-outer">
                                    <div className="blog-modal-inner">
                                        <span className="close" onClick={()=>handleCloseModal(list.blogCount)}>&times;</span>
                                        <div className="blog-modal-inner1">
                                            <div className="blog-modal-inner-profile-pic-div">
                                                <h2>{list.imageTitle}</h2>
                                            </div>
                                            <div className="blog-modal-inner-blog-details-div">
                                                <div className="blog-modal-inner-username-div">
                                                <h2 className='blog-first-name'>{list.firstName}</h2>
                                                {
                                                    list.middleName!=="" ? <h2 className='blog-first-name'>{list.middleName}</h2> : <></>
                                                }
                                                </div>
                                                <h2 className='blog-first-name'>{list.blogDate}</h2>
                                                <h2 className='blog-first-name'>{list.time}</h2>
                                            </div>
                                        </div>
                                        <div className="blog-modal-inner-title-div">
                                            <h2>{list.blogDetails.blogTitle}</h2>
                                        </div>
                                        <div className="blog-modal-inner-title-div">
                                            <h2>{list.blogDetails.title1}</h2>
                                            <p>{list.blogDetails.titleDescription1}</p>
                                        </div>
                                        {
                                            list.blogDetails.title2!=="" ?
                                            <div className="blog-modal-inner-title-div">
                                                <h2>{list.blogDetails.title2}</h2>
                                                <p>{list.blogDetails.titleDescription2}</p>
                                            </div>:(<></>)
                                        }
                                        {
                                            list.blogDetails.title3!=="" ?
                                            <div className="blog-modal-inner-title-div">
                                                <h2>{list.blogDetails.title3}</h2>
                                                <p>{list.blogDetails.titleDescription3}</p>
                                            </div>:(<></>)
                                        }
                                    </div>
                                </div>
                            </div>
                            </>
                        ))
                    }
                    </>
                    )
                    :
                    (
                    <>
                    <h1>No Blogs Found</h1>
                    </>
                    )
                }
            </div>
        </div>
        </>
    )

}

export default HomePage