import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";

class DeviceView extends Component {
    render() {
        const {device} = this.props;

        return (
            <section className='dashboard-wrapper device-view'>
                <div onClick={() =>  {this.props.goBack()}}>
                    <FontAwesomeIcon className='back-arrow' icon={faChevronCircleLeft}/>
                </div>
                <div className='left-menu'>
                    <p className='device-name'>Device {device.name}</p>
                    <p>Device ID
                        <span className='device-content'>{device.deviceID}</span>
                    </p>
                    <p>HW Key
                        <span className='device-content'>{device.HWKey}</span>
                    </p>

                    <div className='toggles-container'>
                        <div className='toggle'>
                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Immobilizer</div>
                                <label className="switch">
                                    <input name="immobilizer" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.immobilizer}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Doors</div>
                                <label className="switch">
                                    <input name="doors" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.doors}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Handbrake</div>
                                <label className="switch">
                                    <input name="handbrake" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.handbrake}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Ignition</div>
                                <label className="switch">
                                    <input name="ignition" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.ignition}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>

                        <div className='toggle'>
                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Key In Holder</div>
                                <label className="switch">
                                    <input name="keyInHolder" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.keyInHolder}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Fuelcard</div>
                                <label className="switch">
                                    <input name="fuelCard" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.fuelCard}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>GPS</div>
                                <label className="switch">
                                    <input name="GPS" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.GPS}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>LTE</div>
                                <label className="switch">
                                    <input name="LTE" type="checkbox" onChange={(e) => this.props.update(device.name, e)} checked={device.LTE}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='right-menu'>
                    <div className='map-container'>
                        <div className='location-heading'>Location</div>
                        <iframe title="Device Location" src={device.location} frameBorder="0"></iframe>
                    </div>

                    <div className='right-menu-bottom'>
                        <div className='bottom-menu-item'><span className='bottom-heading'>Charge</span>
                            <input name="charge" type="range" min="0" max="100" onChange={(e) => this.props.update(device.name, e)} value={device.charge}/> {device.charge}%
                        </div>
                        <div className='bottom-menu-item'><span className='bottom-heading'>Mileage</span>
                            <input name="mileage" type="text" onChange={(e) => this.props.update(device.name, e)} value={device.mileage}/> km
                        </div>
                        <div className='bottom-menu-item'><span className='bottom-heading'>Distance</span>
                            <input name="distance" type="number" onChange={(e) => this.props.update(device.name, e)} value={device.distance}/> km
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DeviceView;