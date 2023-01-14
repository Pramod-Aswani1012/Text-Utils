import React, {useState} from 'react'
import './styleToUpper.css'
import './Navbaar'

export default function Toupper(props) {

    const [text,setText] = useState("Ye hai bhaiya abhi");
    const onch=(event)=>
    {
        setText(event.target.value)
    }

    const toupper =()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }

    const tolower = ()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
    }

    const toclear = ()=>{
      let newtext='';
      setText(newtext)
  }

  const tocapitalise =  ()=>{
    let tt="";
    const newtxtarr=text.split(' ');
    for (let i = 0; i < newtxtarr.length; i++) {
      tt+=newtxtarr[i].charAt(0).toUpperCase()+newtxtarr[i].slice(1,newtxtarr[i].length);
      // tt+=newtxtarr[i];
      tt+=" "; 
    }
    tt=tt.slice(0,tt.length-1)
    setText(tt);
  }
    
  const tocopy = ()=>{
    let cp = document.getElementById("dmmode");
    cp.select();
    navigator.clipboard.writeText(cp.value);
  }

  // let bd = document.getElementsByClassName('change');
  // if(props.mode==='white')
  // {
  //   document.getElementsByClassName('change').style.backgroundColor = '';
  // }
  // else
  // {
  //   document.getElementsByClassName('change').style.backgroundColor = '#433d3d';
  // }


  return (
  <div id='container' className='change'>
      <h1 style={{color: props.mode==='white'?'black':'white'}}>Enter your text here to analyze</h1>
      <textarea name="" id='dmmode' cols="80" rows="10" value={text} onChange={onch} style={{backgroundColor: props.mode==='white'?'white':'#1e1c1c', color: props.mode==='white'?'black':'white'}}></textarea>
      <div className="btns">
      <button className="bttn"  onClick={toupper}>Convert To Upper Case</button>
      <button className="bttn" onClick={tolower}>Convert To Lower Case</button>
      <button className="bttn" onClick={toclear}>Clear Text</button>
      <button className="bttn" id='cpy' onClick={tocopy}>Copy Text</button>
      <button className="bttn" id='cptlise' onClick={tocapitalise}>Capitalise Every Letter</button>
      {/* <button className="bttn" id='darkmode' >Enable Dark Mode</button> */}
      </div>
      <div className="textsummary" style={{color: props.mode==='white'?'black':'white'}}>
      <h1 style={{color: props.mode==='white'?'black':'white'}}>Your text Summary</h1>
      <p>Your text has {text.split(' ').length} words and {text.length} characters </p>
      <p>Reading time of your text is {0.008*text.split(' ').length}</p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </div>
    
  )
  
}
