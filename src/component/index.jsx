import accordionData from "./data";
import { useState } from "react";
import './style.css'

function Accordian() {
  const [selected, setSelected] = useState(null);

  function showAnswer(getCurrentId) {
    setSelected(getCurrentId == selected ? null : getCurrentId);
  }

  return (
    <div>
      {accordionData.map((data) => (
        <div className="items">
          <div className="title" onClick={() => showAnswer(data.id)} key={data.id}>
            <h3>{data.question}</h3>
            <span>+</span>
          </div>

          <div className="answer">
            {selected == data.id ? <div>{data.answer}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordian;
