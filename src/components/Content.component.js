import React from 'react';
//components
import Form from './Form.component';
import Map from './Map.component';

const Content = (props) => {
    return (
        <div className="content">
            <Form/>
            <Map/>
        </div>
    );
}

export default Content;