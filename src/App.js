import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Filter from './Filter';
import CovidList from './CovidList.js';
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>COVID-19 Cases State Wise</h1>
        <Filter />
        <CovidList />
      </div>
    </Provider>
  );
};

export default App;