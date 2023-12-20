import React ,{useState} from 'react'

export default function TextForm(props) {
  const [text ,setText]=useState(""); 
   const handleUpClick=()=>{
    //  console.log("upperCase was clicked");
     let newText= text.toUpperCase();
     setText(newText);
     props.showAlert("text has been capitalized","success");
   };
   const handleOnChange=(event)=>{
    //   console.log("handle change is initiated");
      setText(event.target.value);
    
   }
   const handleLoClick=()=>{
     let newText = text.toLowerCase();
     setText(newText);
     props.showAlert("text has been depicted in lowercase","success");
   }
   const handleClearClick=()=>{
    setText("");
    props.showAlert("text cleared","success");
   }
   const handleCopyClick=()=>{
      navigator.clipboard.writeText(text)
       .then(()=>{})
       .catch((err)=>{
        console.log("error generated",err);
       })
       props.showAlert("text copied","success"); 

      }

   const handlePasteClick=(e)=>{

    navigator.clipboard.readText()
    .then(text => {
    setText(text);}
    )
    .catch((err)=>{
        console.log("error generated",err);
    })
    props.showAlert("text has been pasted","success");
  }
  return (
  <>
  <div className='container'style={{color:props.mode ==='dark'?'white':'black'}}>
  <h1>{props.heading}</h1>
  <div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white', color:props.mode ==='dark'?'white':'black'}}id="myBox" rows="8"></textarea> 
  </div>
  <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>To UpperCaase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>To LowerCase</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>To ClearText</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>copy to clipboard</button>
  <button className="btn btn-primary mx-1 my-1" onClick={handlePasteClick}>Paste from  clipboard</button>
  
  </div>  
  <div className='container my-3'>
    <h2>Your text summary</h2>
    <p> {text.length} characters and {
    text.split(" ").filter((element)=>{return element.length!==0}).length  } words  </p>
    <p>{0.008*text.length ===0? 0 :0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>  
  )
}
