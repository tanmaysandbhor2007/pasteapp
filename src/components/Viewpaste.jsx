import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import  { useState } from "react";
import { updateToPastes } from "../Pasteslice";




const ViewPaste = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // ✅ pick paste from Redux so it updates automatically
  const paste = useSelector((state) =>
    state.paste.pastes.find((p) => p._id === id)
  );

  if (!paste) {
    return <h2>Paste not found</h2>;

  }
  const dispatch=useDispatch()
 

  
 const [title, setTitle] = useState(paste.title);
  const [value, setValue] = useState(paste.content);

  
  function handlePasteUpdate() {
    console.log("hello")

    const uppaste= {
      
          ...paste, // keep the same id and other fields
      title: title,
      content: value,
     
    };
    



    
    dispatch(updateToPastes(uppaste));
    navigate("/pastes"); // go back after update
  }
  return (
     <div>
        <h2 className="txt">{paste ? "Update Paste" : "Create a New Paste"}</h2>
      <input className="inpfil"
        placeholder="enter the title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="btn">
        <button className="crtbtn" onClick={ handlePasteUpdate}>
          {id ? "Update paste" : "Create paste"}
        </button>
      </div>

      <textarea className="textarea"
        placeholder="Enter text here"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        rows={20}
      />
   

      <button className="cpybtn" onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default ViewPaste;
