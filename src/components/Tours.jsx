import React from "react";
import Tour from "./Tour";

const Tours = ({ tour, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
      {tour.map((o) => {
        const { id, image, info, name, price } = o;
        return (
          <>
            <Tour
              id={id}
              image={image}
              info={info}
              name={name}
              price={price}
              removeTour={removeTour}
            ></Tour>
          </>
        );
      })}
      </div>
    </section>
  );
};

export default Tours;
