import React, { useState } from "react";

function Clicker() {
  const [points, setPoints] = useState([]);
  const [stack, setStack] = useState([]);
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
  function handleUndo() {
    const clone = [...points];
    const popped = clone.pop();
    if (popped) {
      setPoints(clone);
      setStack((prev) => [...prev, popped]);
    }
  }
  function handleRedo() {
    const clone = [...stack];
    const popped = clone.pop();
    if (popped) {
      setStack(clone);
      setPoints((prev) => [...prev, popped]);
    }
  }

  return (
    <>
      <button
        className="main-btn"
        onClick={handleUndo}
        disabled={!points.length}
      >
        Undo
      </button>
      <button
        className="main-btn"
        onClick={handleRedo}
        disabled={!stack.length}
      >
        Redo
      </button>
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
