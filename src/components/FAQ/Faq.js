import React from 'react'
import { questions } from "./faq_api";
import Accordion from "./Accordion";
import './faq.css'

function Faq() {
  return (
    <div className="question-part">
      <div className="ques-text">
        <h2>FAQ</h2>
      </div>
      <div className='gradient-line' style={{ width: '100%', height: '1px',  }}></div>
      <div className="main_div">
        {questions.map((curElem) => {
          const { id } = curElem;
          return <Accordion key={id} {...curElem} />;
        })}
      </div>
    </div>
  )
}

export default Faq
