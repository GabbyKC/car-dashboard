import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import DeviceView from "./DeviceView";
import './App.css';

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
                "distance": 12.3,
                "immobilizer": true,
                "keyInHolder": true,
                "doors": true,
                "fuelCard": true,
                "handbrake": true,
                "GPS": "On",
                "ignition": true,
                "LTE": false,
                "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.636431985886!2d13.41102065166224!3d52.52191837971555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1edb11286f%3A0x30fc01c366e4166e!2sAlexanderplatz!5e0!3m2!1sen!2sde!4v1574620427024!5m2!1sen!2sde"
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
                "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.9483064299807!2d13.375510051662115!3d52.516274579714484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1574626587136!5m2!1sen!2sde"
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
                "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.636431985886!2d13.41102065166224!3d52.52191837971555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1edb11286f%3A0x30fc01c366e4166e!2sAlexanderplatz!5e0!3m2!1sen!2sde!4v1574620427024!5m2!1sen!2sde"
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
                "location": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.9483064299807!2d13.375510051662115!3d52.516274579714484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1574626587136!5m2!1sen!2sde"
            }
        ]
    };

    setCurrentlyEditing = (currentlyEditing) => {
        this.setState({...this.state, currentlyEditing: currentlyEditing});
    };

    deleteDevice = () => {
        console.log('Delete not implemented yet')
    };

    updateCar = (carName, e) => {
        const {name, value, type, checked} = e.target;

        let updatedCars = this.state.cars.map(car => (
            car.name === carName ? {...car, [name]: (type === 'checkbox' ? checked : value)} : car
        ));

        this.setState({
            ...this.state,
            cars: updatedCars
        })
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
                        this.setCurrentlyEditing(car.name)
                    }}>
                        <FontAwesomeIcon className='table-icon' icon={faPencilAlt}/>
                        <span className='update-buttons'>Edit</span>
                    </td>
                    <td onClick={this.deleteDevice} className='center'>
                        <FontAwesomeIcon className='table-icon' icon={faTrash}/>
                        <span className='update-buttons'>Delete</span>
                    </td>
                </tr>
            )
        })
    }

    getCarByName = (name) => {
        return this.state.cars.find(car => {
            return car.name === name;
        })
    };

    render() {
        const currentlyEditing = this.state.currentlyEditing;

        if (currentlyEditing) {
            const car = this.getCarByName(currentlyEditing);
            return (
                <DeviceView car={car} goBack={() => this.setCurrentlyEditing(null)} update={this.updateCar}/>
            )
        }
        return (
            <div className='dashboard-wrapper'>
                <div className='header'>
                    <div className='brand-name'>Device Simulator Dashboard</div>
                    {/* dummy icon, no actual functionality */}
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
