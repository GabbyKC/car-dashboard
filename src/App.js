import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faTrash, faPlus} from "@fortawesome/free-solid-svg-icons";
import DeviceView from "./DeviceView";
import Modal from 'react-awesome-modal';
import './App.css';

class App extends Component {
    state = {
        currentlyEditing: null,
        modalVisible: false,
        devices: [
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
                "GPS": true,
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
                "GPS": false,
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
                "GPS": false,
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
                "GPS": true,
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

    updateDevice = (DeviceName, e) => {
        const {name, value, type, checked} = e.target;

        let updatedDevices = this.state.devices.map(device => (
            device.name === DeviceName ? {...device, [name]: (type === 'checkbox' ? checked : value)} : device
        ));

        this.setState({
            ...this.state,
            devices: updatedDevices
        })
    };

    renderTableData() {
        return this.state.devices.map((device, index) => {
            const {name, deviceID, HWKey, charge, mileage, GPS} = device;

            return (
                <tr key={index} className='device-info'>
                    <td>{name}</td>
                    <td>{deviceID}</td>
                    <td>{HWKey}</td>
                    <td>{charge} %</td>
                    <td>{GPS ? 'On' : 'Off'}</td>
                    <td>{mileage}</td>
                    <td className='center' onClick={() => {
                        this.setCurrentlyEditing(device.name)
                    }}>
                        <FontAwesomeIcon className='table-icon' icon={faPencilAlt}/>
                        <span className='update-buttons'>Edit</span>
                    </td>
                    <td onClick={() => this.openModal()} className='center'>
                        <FontAwesomeIcon className='table-icon' icon={faTrash}/>
                        <span className='update-buttons'>Delete</span>
                    </td>
                </tr>
            )
        })
    }

    getDeviceByName = (name) => {
        return this.state.devices.find(device => {
            return device.name === name;
        })
    };

    openModal() {
        this.setState({
            modalVisible: true
        });
    };

    closeModal() {
        this.setState({
            modalVisible: false
        });
    }

    render() {
        const currentlyEditing = this.state.currentlyEditing;

        if (currentlyEditing) {
            const device = this.getDeviceByName(currentlyEditing);
            return (
                <DeviceView device={device} goBack={() => this.setCurrentlyEditing(null)} update={this.updateDevice}/>
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

                <Modal visible={this.state.modalVisible} width="340" height="110" onClickAway={() => this.closeModal()}>
                    <div className='modal-contents'>
                        <p className='modal-text'>Are you sure you want to delete this device?</p>
                        <button  className='cancel-button' onClick={() => this.closeModal()}>Cancel</button>
                        <button className='delete-button' >Delete</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default App;
