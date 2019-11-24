import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";

class DeviceView extends Component {
    render() {
        const {car} = this.props;

        return (
            <section className='dashboard-wrapper device-view'>
                <div onClick={() =>  {this.props.goBack()}}>
                    <FontAwesomeIcon className='back-arrow' icon={faChevronCircleLeft}/>
                </div>
                <div className='left-menu'>
                    <p className='device-name'>Device {car.name}</p>
                    <p>Device ID
                        <span className='device-content'>{car.deviceID}</span>
                    </p>
                    <p>HW Key
                        <span className='device-content'>{car.HWKey}</span>
                    </p>

                    <div className='toggles-container'>
                        <div className='toggle'>
                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Immobilizer</div>
                                <label className="switch">
                                    <input name="immobilizer" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.immobilizer}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Doors</div>
                                <label className="switch">
                                    <input name="doors" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.doors}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Handbrake</div>
                                <label className="switch">
                                    <input name="handbrake" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.handbrake}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Ignition</div>
                                <label className="switch">
                                    <input name="ignition" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.ignition}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>

                        <div className='toggle'>
                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Key In Holder</div>
                                <label className="switch">
                                    <input name="keyInHolder" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.keyInHolder}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>Fuelcard</div>
                                <label className="switch">
                                    <input name="fuelCard" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.fuelCard}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>GPS</div>
                                <label className="switch">
                                    <input name="GPS" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.GPS}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>

                            <div className='toggle-wrapper'>
                                <div className='toggle-name'>LTE</div>
                                <label className="switch">
                                    <input name="LTE" type="checkbox" onChange={(e) => this.props.update(car.name, e)} checked={car.LTE}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='right-menu'>
                    <div className='map-container'>
                        <div className='location-heading'>Location</div>
                        <iframe title="Device Location" src={car.location} frameBorder="0"></iframe>
                    </div>

                    <div className='right-menu-bottom'>
                        <div className='bottom-menu-item'><span className='bottom-heading'>Charge</span>
                            <input name="charge" type="range" min="0" max="100" onChange={(e) => this.props.update(car.name, e)} value={car.charge}/> {car.charge}%
                        </div>
                        <div className='bottom-menu-item'><span className='bottom-heading'>Mileage</span>
                            <input name="mileage" type="text" onChange={(e) => this.props.update(car.name, e)} value={car.mileage}/> km
                        </div>
                        <div className='bottom-menu-item'><span className='bottom-heading'>Distance</span>
                            <input name="distance" type="number" onChange={(e) => this.props.update(car.name, e)} value={car.distance}/> km
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DeviceView;