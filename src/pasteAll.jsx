import React from 'react'
import toast from 'react-hot-toast';
import { useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import { removeFromPastes } from './redux_toolkit/slice';
const pasteAll = () => {
  const[search,setSearch]=useState('');
  const paste_data = useSelector((state)=>state.paster.paste);
  const [removeVal,setRemoveVal]=useState('');
  const filtered_data = paste_data.filter((paste) => paste.title.toLowerCase().includes(search.toLowerCase()));
  const dispatch=useDispatch();
  function deleteA() {
    dispatch(removeFromPastes(removeVal));
    setRemoveVal('');
  }
  useEffect(() => {
    if (removeVal) {
      deleteA();
    }
  }, [removeVal]);
  return (
    <div>
      <div style={{marginTop:"20px"}}>
        <input 
          type="search"
          placeholder='search here'
          value={search}
          style={{width: '600px'}}
          onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        />
      </div> 
      <div>
        {filtered_data.length > 0 ? (
            filtered_data.map((paste) => (
              <div key={paste._id} style={{border: "1px solid black" , padding: "10px", margin: "5px 0" }}>
                <div>
                  {paste.title}
                </div>
                <div>
                  {paste.content}
                </div>
                <div style={{ display: "flex", justifyContent: "center",gap: "10px", marginTop: "10px" }}>
                  <button style={{ width: "70px" }}
                    onClick={() => {navigator.clipboard.writeText(paste.content).then(() => toast("Successfully copied !!!!"))} }
                  >copy</button>
                  <button style={{ width: "70px" }}>edit</button>
                  <button style={{ width: "70px" }}>share</button>
                  <button style={{ width: '70px' }} onClick={() => setRemoveVal(paste._id)}>
                  delete
                </button>

                  <button style={{ width: "70px" }}>view</button>
                </div>
                <div>
                  {paste.createdAt}
                </div>
              </div>
            ))
        ) : (
          <p>No matching pastes found.</p>
        )}
      </div>
    </div>
  )
}

export default pasteAll

