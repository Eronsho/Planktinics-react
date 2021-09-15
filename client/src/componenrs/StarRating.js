import { observer } from "mobx-react-lite";
import { React, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { removeRating } from "../http/deviceApi";
import { Context } from "../index";
import "./StarRating.css";
const StarRating = observer(({ devicesRating }, deviceId) => {
  const [rating, setRating] = useState(devicesRating);
  useEffect(() => {
    removeRating(deviceId, { rating: rating });
    console.log(rating);
  }, [rating]);
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="star"
              size={24}
              color={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
});
export default StarRating;
