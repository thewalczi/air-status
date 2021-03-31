import React from 'react';
import Content from './Content.component';
import Sidebar from './Sidebar.component';

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <Content/>
            <Sidebar/>
        </div>
    );
}

export default Wrapper;