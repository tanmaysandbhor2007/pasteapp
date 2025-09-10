import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../Pasteslice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch=useDispatch()

//   console.log(title);
//   console.log(value);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36), // unique id
      createdAt: new Date().toLocaltring(),
    };

    // console.log("Paste created:", paste);

    if(pasteId){
        // update
        dispatch( updateToPastes(paste))
    }
    else
    {
        // create
      dispatch(addToPastes(paste))
    }

    // after paste creation
    setTitle('')
    setValue('')

        
    

 
  }

  return (
    <div>
        <h2 className="txt">{pasteId ? "Update Paste" : "Create a New Paste"}</h2>
      <input className="inpfil"
        placeholder="enter the title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <div className="btn">
        <button className="crtbtn" onClick={createPaste}>
          {pasteId ? "Update paste" : "Create paste"}
        </button>
      </div>

      <textarea className="textarea"
        placeholder="Enter text here"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        rows={20}
      />
    </div>
  );
};

export default Home;
