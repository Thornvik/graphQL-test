import React from "react";
import "./styles/main.scss";
import { useQuery, gql } from "@apollo/client";

import { DataModel } from "./models/data-model";

import Loading from "./components/loading/loading";
import List from "./components/list/list";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <Loading />;
  if (error) return <p>awww shiet... :C</p>;

  return (
    <div className="app">
      <div className="currency-list">
        {data.rates.map((rates: DataModel) =>
          rates.name ? <List key={rates.currency} {...rates}></List> : null
        )}
      </div>
    </div>
  );
}

export default App;
