import React, { useState } from "react";

function Clicker() {
  const [points, setPoints] = useState([]);
  function handleClick(e) {
    const { clientX, clientY } = e;
    setPoints((prev) => [
      ...prev,
      {
        x: clientX,
        y: clientY,
      },
    ]);
  }
  function handleUndo() {}
  function handleRedo() {}
  return (
    <>
      <button>Undo</button>
      <button>Redo</button>
      <div id="click-area" onClick={handleClick}></div>
      {points?.map((item, ind) => (
        <span
          key={ind}
          style={{ top: item?.y - 5, left: item?.x - 5 }}
          className="dots"
        ></span>
      ))}
    </>
  );
}

export default Clicker;
