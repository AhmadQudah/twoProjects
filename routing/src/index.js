import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostIndex from "./components/post_index";
import PostsNew from "./components/posts_new";
import PostsShow from "./components/posts_show";

//BrowserRouter : is what interacts with the history library
// and decides what to do bassed on the change inside the url

//purpose of the route component is to provide that
//configuration of the url
// if (url) then I want to show this/that component

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//we use the route to show and hide components

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
