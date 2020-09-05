import React from "react";
import "./Card.css";

export const Card = ({ image }) => {
  return (
    <div className="card">
      <div className="image">
        <img src={image.webformatURL} alt="img" />
      </div>
      <div className="details">
        <li className="Author" style={{ fontSize: "20px" }}>
          Photo By {image.user}
        </li>
        <ul className="listDetails">
          <li>
            <strong> View : </strong>
            {image.views}
          </li>
          <li>
            <strong> Downlaod : </strong>
            {image.downloads}
          </li>
          <li>
            <strong> Likes : </strong>
            {image.likes}
          </li>
        </ul>
        <strong> </strong>
      </div>
    </div>
  );
};
export default Card;
