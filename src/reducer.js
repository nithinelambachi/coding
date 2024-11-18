import { SET_FILTER } from './actions';

const CovidData = [
  {
    state: 'Maharashtra',
    totalCases: 1000000,
    activeCases: 50000,
    recovered: 900000,
    deaths: 50000,
  },
  {
    state: 'Kerala',
    totalCases: 800000,
    activeCases: 30000,
    recovered: 750000,
    deaths: 20000,
  },
  {
    state: 'Tamil Nadu',
    totalCases: 600000,
    activeCases: 20000,
    recovered: 570000,
    deaths: 10000,
  },
  {
    state: 'Delhi',
    totalCases: 700000,
    activeCases: 15000,
    recovered: 670000,
    deaths: 15000,
  },
];
const initialState = {
  selectedState: '',
  covidData: CovidData,
};

const covidReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        selectedState: action.payload,
      };
    default:
      return state;
  }
};

export default covidReducer;