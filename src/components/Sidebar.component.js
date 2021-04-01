import React, { useContext } from 'react';
import { MeasurmentContext } from '../contexts/Measurment.context';

const Sidebar = (props) => {

    const { measurment } = useContext(MeasurmentContext);
    console.log(measurment);
    return (
        <div className="sidebar">
            {measurment ? <ul className="sidebar__list">
                {measurment.values.map((value) => {
                    return (
                        <li className="sidebar__list-item" key={value.name}>
                            <h5>{value.name}</h5>
                            <p>{value.value}</p>
                        </li>
                    )
                })}
            </ul> : null}
        </div>
    );
}

export default Sidebar;