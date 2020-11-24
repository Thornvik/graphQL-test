import { gql } from "@apollo/client";

export const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD") {
    currency
    rate
    name
  }
}
`;

export const GET_SPECIFIC_EXHANGE_RATE = gql`
  query SpecificExchangeRate($currency: String!) {
    rates(currency: $currency) {
      currency
      rate
      name
    }
  }
`