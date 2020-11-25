import React from "react";
import "./styles/main.scss";
import { useQuery } from "@apollo/client";

import Context from "./context/context";

import {
  EXCHANGE_RATES,
  GET_SPECIFIC_EXHANGE_RATE,
} from "./graphql/queries/queries";

import Loading from "./components/loading/loading";
import List from "./components/list/list";
import Form from "./components/form/form";

function App() {
  const specificCurrency = "SEK";
  const { loading, error, data } = useQuery(GET_SPECIFIC_EXHANGE_RATE, {
    variables: { currency: specificCurrency },
  });

  if (loading) return <Loading />;
  if (error) return <img src="https://i.imgur.com/lKJiT77.png" alt="" />;
  console.log(data.rates);
  return (
    <div className="app">
      <Form />
      <Context.Provider value={data.rates}>
        <List />
      </Context.Provider>
    </div>
  );
}

export default App;
