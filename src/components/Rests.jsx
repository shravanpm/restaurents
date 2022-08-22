import React from "react";

const Rests = ({ data }) => {
  return (
    <div>
      <section className="near-you">
        <div className="container divider">
          <div className="cards">
            {data.map((el) => (
              <div className="card" key={el.id}>
                <img width="254" height="160px" src={el.img} />
                <div className="restaurant-details">
                  <div className="restaurant-title">{el.title}</div>
                  <div className="restaurant-subtitle">{el.subTitle}</div>
                </div>
                <div className="restaurant-info">
                  <div className="restaurant-ratings">
                    <i className="material-icons star-icon">star</i> {el.rating}
                  </div>
                  .
                  <div className="restaurant-delivery-timings">
                    {" "}
                    {el.timing} MINS
                  </div>{" "}
                  .
                  <div className="restaurant-cost-for-two">
                    ₹ {el.costFor2}
                  </div>
                </div>
                <div className="offer-banner">
                  <span className="material-icons"> local_offer </span>
                  <span className="offer-text">{el.offer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rests;
