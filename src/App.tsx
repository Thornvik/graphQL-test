import React from "react";
import "./styles/main.scss";
import { useQuery, gql } from "@apollo/client";

import Context from "./context/context";

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
      <Context.Provider value={data.rates}>
        <List />
      </Context.Provider>
    </div>
  );
}

export default App;
