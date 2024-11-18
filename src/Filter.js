import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './actions';

const Filter = () => {
    const dispatch = useDispatch();
    const covidData = useSelector((state) => state.covidData);
    const selectedState = useSelector((state) => state.selectedState);

    const handleStateChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    return (
        <div>
            <label htmlFor="stateFilter">State: </label>
            <select id="stateFilter" value={selectedState} onChange={handleStateChange}>
                <option value="">All</option>
                {covidData?.map((item, index) => (
                    <option key={index} value={item.state}>
                        {item.state}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filter;