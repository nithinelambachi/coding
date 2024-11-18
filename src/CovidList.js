import React from 'react';
import { useSelector } from 'react-redux';

const CovidList = () => {
    const covidData = useSelector((state) => state.covidData);
    const selectedState = useSelector((state) => state.selectedState);

    const filteredData =
        selectedState === ''
            ? covidData
            : covidData.filter((item) => item.state === selectedState);

    return (
        <table border="1" >
            <thead>
                <tr>
                    <th>State </th>
                    < th > Total Cases </th>
                    < th > Active Cases </th>
                    < th > Recovered </th>
                    < th > Deaths </th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredData?.map((item, index) => (
                        <tr key={index} >
                            <td>{item.state} </td>
                            < td > {item.totalCases} </td>
                            < td > {item.activeCases} </td>
                            < td > {item.recovered} </td>
                            < td > {item.deaths} </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};

export default CovidList;