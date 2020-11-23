import React from "react";
import "./list.scss";

import { DataModel } from "../../models/data-model";

const List = ({ currency, rate, name }: DataModel) => {
  return (
    <div className="currency-list--item">
      <h2>{name}</h2>
      <p>
        {currency}: {rate}
      </p>
    </div>
  );
};

export default List;
