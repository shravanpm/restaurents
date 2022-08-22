import React, { useState } from "react";

const AddRes = ({ addRes }) => {
  const [res, setRes] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRes({ ...res, [name]: value });
  };
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <h3>Add Restaurent</h3>
      <div style={{ maxWidth: "300px", margin: "auto" }}>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          action=""
        >
          <input
            type="text"
            name="title"
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="Enter name"
            id=""
          />
          <input
            type="text"
            name="subTitle"
            placeholder="Enter Cuisine"
            onChange={(e) => {
              handleChange(e);
            }}
            id=""
          />
          <input
            type="text"
            onChange={(e) => {
              handleChange(e);
            }}
            name="img"
            id=""
            placeholder="Enter Image Link"
          />
          <input
            type="number"
            name="timing"
            placeholder="enter time to deliver"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <input
            type="number"
            name="costFor2"
            id=""
            placeholder="enter cost for two"
            onChange={(e) => {
              handleChange(e);
            }}
          />

          <input
            type="number"
            name="rating"
            id=""
            onChange={(e) => {
              handleChange(e);
            }}
            placeholder="enter rating"
          />
          <button
            type="Submit"
            onClick={(e) => {
              e.preventDefault();
              addRes(res);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRes;
/**
 * "id":4,
        "img":"https://github.com/shravanpm/cherry/blob/main/cherry/assets/restaurant4.jpeg?raw=true",
        "title":"The Hungry Hippe",
        "subTitle":"Chinese, Italian, Thai",
        "timing":38,
        "costFor2":190,
        "offer":"40% off | Use TRYNEW",
        "rating":2
 */
