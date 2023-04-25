import React, { useState } from "react";
import { BsArrowRight,  } from "react-icons/bs";
import {AiOutlineArrowUp} from 'react-icons/ai'

function Accordion({ question, answer }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <h3>{question}</h3>
        <p onClick={() => setShow(!show)}>
          {show ? <AiOutlineArrowUp color="white" /> : <BsArrowRight color="white" />}
        </p>
      </div>
      {show && <p className="main-heading-text">{answer}</p>}
    <div style= {{width: '100%', height:'1px', background:'gray' }}></div>
    </>
  );
}

export default Accordion;