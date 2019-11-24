import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import './App.css';
// import data from './data';

class App extends Component {
    state = {
        currentlyEditing: null,
        cars: [
            {
                "name": 1,
                "deviceID": "12345678",
                "HWKey": "98765432",
                "charge": 80,
                "mileage": 4000,
                "distance": 23,
                "immobilizer": true,
                "keyInHolder": true,
                "doors": true,
                "fuelCard": true,
                "handbrake": true,
                "GPS": "On",
                "ignition": true,
                "LTE": false,
            },
            {
                "name": 2,
                "deviceID": "12345677",
                "HWKey": "98765432",
                "charge": 25,
                "mileage": 250,
                "distance": 10,
                "immobilizer": true,
                "keyInHolder": false,
                "doors": true,
                "fuelCard": true,
                "handbrake": true,
                "GPS": "Off",
                "ignition": true,
                "LTE": false,
            },
            {
                "name": 3,
                "deviceID": "12345677",
                "HWKey": "98765432",
                "charge": 25,
                "mileage": 250,
                "distance": 10,
                "immobilizer": true,
                "keyInHolder": false,
                "doors": true,
                "fuelCard": true,
                "handbrake": true,
                "GPS": "Off",
                "ignition": true,
                "LTE": false,
            },
            {
                "name": 4,
                "deviceID": "12345677",
                "HWKey": "98765432",
                "charge": 25,
                "mileage": 250,
                "distance": 10,
                "immobilizer": true,
                "keyInHolder": false,
                "doors": true,
                "fuelCard": true,
                "handbrake": true,
                "GPS": "On",
                "ignition": true,
                "LTE": false,
            }
        ]
    };

    renderTableData() {
        return this.state.cars.map((car, index) => {
            const {name, deviceID, HWKey, charge, mileage, GPS} = car;

            return (
                <tr key={index} className='car-info'>
                    <td>{name}</td>
                    <td>{deviceID}</td>
                    <td>{HWKey}</td>
                    <td>{charge} %</td>
                    <td>{GPS}</td>
                    <td>{mileage}</td>
                    <td className='center' onClick={() => {
                        this.setState({...this.state, currentlyEditing: car})
                    }}><FontAwesomeIcon className='table-icon' icon={faPencilAlt}/> <span className='update-buttons'>Edit</span></td>
                    <td className='center'><FontAwesomeIcon className='table-icon' icon={faTrash}/> <span className='update-buttons'>Delete</span></td>
                </tr>
            )
        })
    }

    render() {
        const currentlyEditing = this.state.currentlyEditing;

        if (currentlyEditing) {
            return (
                <div>Ur editing now {currentlyEditing.name}</div>
            )
        }
        return (
            <div className='dashboard-wrapper'>
                <div className='header'>
                    <div className='brand-name'>Device Simulator Dashboard</div> {/* dummy icon, no actual functionality */}
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
