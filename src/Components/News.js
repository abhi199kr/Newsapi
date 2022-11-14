import axios from "axios";
import React, { useEffect } from "react";

// const baseURL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=ff7d692dc594483582b7f9755a68182d"
const base="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ff7d692dc594483582b7f9755a68182d"

export default function News() {
  const [post, setPost] = React.useState([]);
 async function data()
 {
   
    try{
        const result =await axios.get(base)
        setPost(result.data.articles)
        console.log(post)

    }
    catch(err)
    {
        console.log("Error",err)
    }
 }
 useEffect(()=>{
  data()
 },[])

//   React.useEfferct(() => {
//     data()
    
//   }, []);

 
  return (
    <div className="container bgn">
    <h1 className="text-danger n">News</h1>
    {/* <button onClick={()=>data()}>News</button> */}
    <div className="row ">
    {
      post.map((e)=>{
        return(
            <>
           
            <div className="card  col-md-3 col-sm-12" >
            <img className="img-fluid" src={e.urlToImage} alt="" />
            <h3 className="text-center p-2">{e.author}</h3>
            <p>{e.description}</p>
            
            <p>{e.content}</p>

            </div>
           
            </>
        )
      })
    }
    </div>
      
    </div>
  );
}