import React, { useContext } from "react";
import "./list.scss";

import Context from "../../context/context";

import { DataModel } from "../../models/data-model";

const List = () => {
  const rates = useContext<any>(Context);

  console.log(rates);

  return (
    <div className="currency-list">
      {rates.map(({ currency, rate, name }: DataModel) =>
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
  );
};

export default List;
