import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

import './App.css';
import data from './data';

class App extends Component {
    renderTableData() {
        return data.map((car, index) => {
            const {name, deviceID, HWKey, charge, mileage, GPS} = car;
            return (
                <tr key={index} className='car-info'>
                    <td>{name}</td>
                    <td>{deviceID}</td>
                    <td>{HWKey}</td>
                    <td>{charge} %</td>
                    <td>{GPS}</td>
                    <td>{mileage}</td>
                    <td> <FontAwesomeIcon className='table-icon' icon={faPencilAlt}/></td>
                    <td> <FontAwesomeIcon className='table-icon' icon={faTrash}/></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className='dashboard-wrapper'>
                <div className='header'>
                    <div className='brand-name'>Device Simulator Dashboard</div>
                    <div className='add-device'><FontAwesomeIcon icon={faPlus}/> Add Device</div>
                </div>

                <table>
                    <thead>
                    <tr className='table-headings'>
                        <th>NAME</th>
                        <th>DEVICE ID</th>
                        <th>HW KEY</th>
                        <th>CHARGE</th>
                        <th>GPS</th>
                        <th>MILEAGE</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
