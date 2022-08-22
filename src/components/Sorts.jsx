import React from "react";

const Sorts = ({ data }) => {
  const { lowToHigh, highToLow, sortRating, sortDelivery, sortByRelevance } =
    data;
  return (
    <div>
      <div className="container restaurants">
        <h1>50 restaurants</h1>
        <div className="restaurant-options">
          <div className="restaurant-option" onClick={highToLow}>
            Cost High to Low
          </div>

          <div
            className="restaurant-option"
            onClick={() => {
              lowToHigh();
            }}
          >
            Cost Low to High
          </div>
          <div className="restaurant-option" onClick={sortRating}>
            Ratings
          </div>
          <div className="restaurant-option" onClick={sortDelivery}>
            Delivery Time
          </div>
          <div className="restaurant-option" onClick={sortByRelevance}>
            Relevance
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorts;
