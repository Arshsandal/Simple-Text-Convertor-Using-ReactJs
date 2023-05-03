import React , {useState} from 'react'

export default function Form(props) {

    
    const handleUpClick = ()=> {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleRemoveAllClick = ()=> {
        let newText = ' ';
        setText(newText)
    }

    const handleLoClick = ()=> {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleReverseClick = ()=> {
        let newText = text.split("").reverse().join("");
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");
  return (  
    <>
<div className="my-3">
    <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert To UPPERCASE</button>
<button className="btn btn-success mx-3" onClick={handleLoClick}>Convert To lowercase</button>
<button className="btn btn-danger mx-3" onClick={handleRemoveAllClick}>Remove All</button>
<button className="btn btn-secondary mx-3" onClick={handleReverseClick}>Reverse All</button>
<div className="container my-3">
<h2>Your Text Summmary</h2>
<p>{text.length} characters</p>
<h3>Preview</h3>
<p>{text}</p>
</div>
</>
  )
} 