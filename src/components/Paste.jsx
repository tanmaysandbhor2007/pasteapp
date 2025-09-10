import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from "../Pasteslice";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";




export const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes)
  const dispatch = useDispatch()
  const [searchTerms, setSearchTerms] = useState("")
    const navigate = useNavigate();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerms.toLowerCase())
  )

  function copyToClipboard(content) {
  navigator.clipboard.writeText(content)
    .then(() => toast.success("Copied to clipboard!"))
    .catch(() => toast.error("Failed to copy!"));
}
function sharePaste(title, content) {
  const text = `📌 ${title}\n\n${content}`;

  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
    })
      .then(() => toast.success("Shared successfully ✅"))
      .catch((error) => toast.error("Share cancelled ❌"));
  } else {
    // fallback: copy to clipboard
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard (no share support)");
  }
}


function deletepaste(pasteId){
    dispatch(removeFromPastes(pasteId));
   


}

   
  return (
    <div className='srchcrd'>
      <input className='srch'
        placeholder="search paste"
        value={searchTerms}
        onChange={(e) => setSearchTerms(e.target.value)}
      />

     

     
     {
          filterData.length>0 && filterData.map((Paste)=>{
     const strDate = Paste.createdAt;  
const date = new Date(strDate);

const options = { 
  day: "2-digit", 
  month: "long",   // 👈 month in words
  year: "numeric", 
  hour: "2-digit", 
  minute: "2-digit", 
  hour12: true     // 👈 for AM/PM
};

const formattedDate = date.toLocaleString("en-US", options);

           

      
       return(
        <div className='paste_crd'>
        <h3>Title</h3>{Paste.title}
        
        <br></br>
        <button   className='dltbtn' onClick={ ()=>deletepaste(Paste._id)}>delete</button>
        <button className='cpybtn'onClick={() => copyToClipboard(Paste.content)}>copy</button>
        <button className='cpybtn'onClick={() => navigate(`/pastes/${Paste._id}`)}>view</button>
        <button className='cpybtn'onClick={sharePaste}>share</button>
        <h4> {formattedDate }</h4>
        </div>
       )})

       }

       
   
     
    </div>
  )

}
