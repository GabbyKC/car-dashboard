import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft} from "@fortawesome/free-solid-svg-icons";

class DeviceView extends Component {
    render() {
        return (
            <section className='dashboard-wrapper device-view'>
                <div onClick={() => this.props.goBack()}><FontAwesomeIcon className='back-arrow' icon={faChevronCircleLeft}/></div>
                <div className='left-menu'>
                    <p className='device-name'>Device {this.props.car.name}</p>
                    <p>Device ID
                        <span className='device-content'>{this.props.car.deviceID}</span>
                    </p>
                    <p>HW Key
                        <span className='device-content'>{this.props.car.HWKey}</span>
                    </p>

                    <div className='toggles-container'>

                    </div>

                </div>
                <div className='right-menu'>
                    <div>hi</div>
                    <div>bye</div>
                </div>

            </section>
        );
    }
}

export default DeviceView;