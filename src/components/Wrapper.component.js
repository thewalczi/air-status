import React from 'react';
import Content from './Content.component';
import Sidebar from './Sidebar.component';

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            {props.children}
        </div>
    );
}

export default Wrapper;