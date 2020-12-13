import React, { useState, useEffect } from "react";
import "./shortener.css";
import { getShortLink } from "./helper";
import ResultUrlItem from "./ResultUrlItem";

function Shortener() {
  const [linkList, setLinkList] = useState([]);
  const [error, setError] = useState("");
  const [cssClass, setCssClass] = useState("");
  const [cssClassInput, setCssClassInput] = useState("input");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function ErrorMessage() {
    if (error === "") setCssClass("invisible error-message");
    else setCssClass("error-message");
    return <div className={cssClass}>{error}</div>;
  }

  useEffect(() => {
    const previousList = localStorage.getItem("urlList");
    if (previousList === null) setLinkList([]);
    else {
      setLinkList(JSON.parse(previousList));
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (url === "") {
      setCssClassInput("input input-error");
      setError("Please add a link");
      return;
    }

    try {
      setIsLoading(true);
      const message = await getShortLink(url);
      if (message.ok === false) setError(message.error);
      else {
        const obj = { original: url, shorten: message.link };
        const newLinkList = linkList.concat(obj);
        setLinkList(newLinkList);
        localStorage.setItem("urlList", JSON.stringify(newLinkList));
        setUrl("");
      }
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  const handleChange = (event) => {
    setError("");
    setCssClassInput("input");
    setUrl(event.target.value);
  };

  return (
    <div className="shortener my-1 text-center">
      <div className="container">
        <div className="input-box">
          <form className="input-form" onSubmit={handleSubmit}>
            <input
              value={url}
              onChange={handleChange}
              placeholder="Shorten a link here..."
              className={cssClassInput}
            />
            <button type="submit" className="btn btn-form" disabled={isLoading}>
              Shorten It!
            </button>
          </form>
          <ErrorMessage />
        </div>
        <div className="result-box">
          {linkList &&
            linkList.map((link, idx) => {
              return (
                <ResultUrlItem
                  original={link.original}
                  shorten={link.shorten}
                  key={idx}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Shortener;
