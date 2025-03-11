import React,{useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addPaste, updatePaste,resetPaste } from './redux_toolkit/slice'; 
const home = () => {
    const [title,setTitle] = useState('');
    const [value,setValue] = useState('');
    {/* How to fetch the id that has triggered the page */}
    const [searchParams,setSearchParams]= useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch=useDispatch();
    function createPastes() {
        const paste = {
          title: title,
          content: value,
          _id: pasteId || new Date().getTime().toString(36),  // This will generate a new ID if pasteId is missing
          createdAt: new Date().toISOString(),
        };
      
        // Log the pasteId and the action payload
        console.log("pasteId:", pasteId);
        console.log("paste to be added or updated:", paste);
      
        if (pasteId) {
          // If pasteId exists, dispatch the update action
          console.log("Dispatching updatePaste");
          dispatch(updatePaste(paste));
        } else {
          // If pasteId is missing, dispatch the add action
          console.log("Dispatching addPaste");
          dispatch(addPaste(paste));
        }
      
        // Reset form after action
        setTitle('');
        setValue('');
        setSearchParams('');
      }
      
    function doi(){
        dispatch(resetPaste());
    }
  return (
    <div>
        {/* Title input */}
        <input 
            type="text"
            placeholder='enter your text'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
        />
        <div>
            {/* text input */}
            <textarea
                value={value}
                placeholder="enter content here"
                onChange={(e)=>setValue(e.target.value)}
                rows={20}
            />    
        </div>
        {/* button to do the needfull */}
        <button onClick={(createPastes)}>
            {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
        <br/>
        <button onClick={(doi)}>
            Reset All Paste
        </button>
    </div>
  )
}

export default home
