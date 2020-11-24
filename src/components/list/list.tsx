import React, { useContext } from "react";
import "./list.scss";

import Context from "../../context/context";

import { DataModel } from "../../models/data-model";

const List = () => {
  const rates = useContext<any>(Context);

  return (
    <div className="list-container">
      <h1>GraphQL querie</h1>
      <div className="currency-list">
        {rates.slice(0, 30).map(({ currency, rate, name }: DataModel) =>
          name ? (
            <div key={currency} className="currency-list--item">
              <h2>{name}</h2>
              <p>
                {currency}: {rate}
              </p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default List;
