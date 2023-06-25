import React, { useState } from "react";

const Star = () => {
  const [clicked, setClicked] = useState(2);
  const [hover, setHovered] = useState("");

  const handleClick = (i) => {
    if (i === clicked) setClicked(0);
    setClicked(i);
  };

  const handleMouseOver = (i) => {
    setHovered(i);
  };

  const handleMouseLeave = () => {
    setHovered();
  };

  return (
    <div>
      <h1 className="heading">Star Rating Component</h1>
      <div className="star__wrapper">
        {[...Array(5)].map((_, index) => {
          return (
            <div
              onClick={() => handleClick(index)}
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={() => handleMouseLeave()}
              className={`star  
                ${index <= hover && index !== 0 && "active"}
                ${index > hover && "default"}
                ${index <= clicked && "active"}`}
              key={index}
            >
              {" "}
              &#9733;
            </div>
          );
        })}
      </div>
      <h3>Selected Count: {clicked + 1}</h3>
    </div>
  );
};

export default Star;
