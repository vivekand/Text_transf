import React,{ useState } from 'react'


export default function TextForm(props) {

  const [text, setText] = useState("");  // this is hook
  // setText("ijjfgijdjjl") // for the updattions\te\\
  // text="this is seted"; worng way to change the text
  // setText("ijjfgijdjjl");
   
   const handleOnClick=()=>{
    // console.log("uppercase was clicked "+text);
    let newtext=text.toUpperCase(); // this is a function to change text into upper case
    setText(newtext);
    props.showAlert("Converted to Uppercase!","success")

   }
   const clearBox =()=>{
    // console.log("uppercase was clicked "+text);
    let newtext=""; // this is a function to change text into upper case
    setText(newtext);
    props.showAlert("Cleared","success")

   }
   const removeExtraSpace=()=>{
    let newtext =text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("space removed!","success")
   }

   const copyText=()=>{
      let text=document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Coppied!","success")  
   }

   const handleloClick=()=>{
    
    let newtext=text.toLowerCase(); // this is a function to change text into upper case
    setText(newtext);
    props.showAlert("Converted to Lowercase!","success")

   }

   const handleOnChange=(event)=>{
    setText(event.target.value);
   }

   
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
         <textarea className="form-control" id="myBox" value={text} style={{backgroundColor: props.mode==='dark'? 'grey':'white' , color: props.mode==='dark'? 'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2"  onClick={handleOnClick}>Convert into Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert into Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={clearBox}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>RemoveExtraSpace</button>
         <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}} >
            <h2>Your text summry</h2>
            <p>{text.split(" ").length} word, {text.length} characters</p>
            <p>{0.008*text.split(" ").length} Minutes to read </p>
            <h2>Preview </h2>
            <p>{text.length===0?"Enter the text above":text}</p>
        </div>
        

    </div>
    </>
  )
}
















