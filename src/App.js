import React from "react";

import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
} from "react-instantsearch-dom";
import "./App.css";
import { instantMeiliSearch } from "@meilisearch/instant-meilisearch";


import 'bulma/css/bulma.min.css'; // Import Bulma CSS
const host_url = process.env.REACT_APP_BACKEND_SERVER
const api_key = process.env.REACT_APP_API_KEY
const searchClient = instantMeiliSearch(
    host_url,
    api_key
);

console.log(host_url)
const App = () => (

    <div className="container">
      <section className="section">
        <h1 className="title has-text-centered">ALLTECH</h1>
        <div className="columns is-centered">
          <div className="column is-half">
            <div className="box">
              <h2 className="subtitle has-text-centered">Shop 2 Stock</h2>
              <InstantSearch indexName="Shop2Stock" searchClient={searchClient}>
                <div className="field">
                  <SearchBox className="input is-medium" />
                </div>
                <div className="field">
                  <Stats />
                </div>
                <CustomHits />
              </InstantSearch>
            </div>
          </div>
        </div>
      </section>
    </div>
);

const CustomHits = () => (
    <InfiniteHits
        hitComponent={Hit}
        translations={{ loadPrevious: "Load previous results" }}
    />
);

const Hit = ({ hit }) => (
    <div className="box hit-card">
      <div className="hit-details">
        <p className="title is-4 hit-product-name">{hit.product_name}</p>
        <p style={{marginTop:10}} className="subtitle is-6 hit-quantity">Quantity: {hit.quantity}</p>
        <p className="subtitle is-6 hit-price">Price: {hit.price}</p>
      </div>
    </div>
);

export default App;
