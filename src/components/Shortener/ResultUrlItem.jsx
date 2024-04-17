import React, { useRef, useState } from "react";

function ResultUrlItem({ original, shorten }) {
  const ref = useRef();
  const [btnText, setBtnText] = useState("Copy");
  const [btnStyle, setBtnStyle] = useState("btn btn-copy");

  const copyIt = async (event) => {
    await navigator.clipboard.writeText(ref.current.value);
    setBtnText("Copied!");
    setBtnStyle("btn btn-copy btn-dark");
  };

  return (
    <div className="result-url-item my-2">
      <div className="original-url">{original}</div>
      <div className="dark-line"></div>
      <div className="shorten-copy">
        <textarea className="shorten-url" ref={ref} disabled>
          {shorten}
        </textarea>
        <button className={btnStyle} onClick={copyIt}>
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default ResultUrlItem;
