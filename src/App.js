import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPencilAlt, faPlus, faTrash} from "@fortawesome/free-solid-svg-icons";
import DeviceView from "./DeviceView";
import Modal from 'react-awesome-modal';
import devices from './data';
import './App.css';

class App extends Component {
    state = {
        devices: devices,
        deviceToEdit: null,
        deviceToDelete: null,
        showDeletionModal: false,
    };

    showMessage = () => {
        alert("Oh Hello! This feature isn't implemented yet, but if you hire Gabi, she can do it ;)")
    };

    showEditView = (deviceToEdit) => {
        this.setState({deviceToEdit: deviceToEdit});
    };

    hideEditView = () => {
        this.setState({deviceToEdit: null});
    };

    showDeletionModal(deviceName) {
        this.setState({
            deviceToDelete: deviceName,
            showDeletionModal: true
        });
    };

    hideDeletionModal() {
        this.setState({
            deviceToDelete: null,
            showDeletionModal: false
        });
    }

    deleteDevice = () => {
        this.setState({
            devices: this.state.devices.filter((device) => device.name !== this.state.deviceToDelete)
        });
        this.hideDeletionModal()
    };

    getDeviceByName = (deviceName) => {
        return this.state.devices.find(device => {
            return device.name === deviceName;
        })
    };

    updateDevice = (deviceName, e) => {
        const {name, value, type, checked} = e.target;

        this.setState({
            devices: this.state.devices.map(device => (
                device.name === deviceName ? {...device, [name]: (type === 'checkbox' ? checked : value)} : device
            ))
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
                        this.showEditView(device.name)
                    }}>
                        <FontAwesomeIcon className='table-icon' icon={faPencilAlt}/>
                        <span className='update-buttons'>Edit</span>
                    </td>
                    <td onClick={() => this.showDeletionModal(device.name)} className='center'>
                        <FontAwesomeIcon className='table-icon' icon={faTrash}/>
                        <span className='update-buttons'>Delete</span>
                    </td>
                </tr>
            )
        })
    }

    render() {
        const currentlyEditing = this.state.deviceToEdit;

        if (currentlyEditing) {
            const device = this.getDeviceByName(currentlyEditing);
            return (
                <DeviceView device={device} goBack={() => this.hideEditView()} update={this.updateDevice}/>
            )
        }
        return (
            <div className='dashboard-wrapper'>
                <div className='header'>
                    <div className='brand-name'>Device Simulator Dashboard</div>
                    <div onClick={this.showMessage} className='add-device'><FontAwesomeIcon icon={faPlus}/> Add Device</div>
                </div>

                <table className='table'>
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

                <Modal visible={this.state.showDeletionModal} width="340" height="110"
                       onClickAway={() => this.hideDeletionModal()}>
                    <div className='modal-contents'>
                        <p className='modal-text'>Are you sure you want to delete this device?</p>
                        <button className='cancel-button' onClick={() => this.hideDeletionModal()}>Cancel</button>
                        <button onClick={() => this.deleteDevice()} className='delete-button'>Delete</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default App;
