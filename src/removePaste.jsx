import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { removeFromPastes } from './redux_toolkit/slice';
const removePaste = () => {
    const dispatch=useDispatch();
    const [value,setvalue]=useState('');
    function remove_id(){
        dispatch(removeFromPastes(value));
        setvalue('');
    }
    return (
        <div>
            <input
                type="text"
                placeholder='enter the Id to be removed'
                onChange={(e)=>setvalue(e.target.value)}
            />
            <button onClick={remove_id}>
                Remove 
            </button>
        </div>
    )
}

export default removePaste
