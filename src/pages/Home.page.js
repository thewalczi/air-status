import React from 'react';
import Content from '../components/Content.component';
import Sidebar from '../components/Sidebar.component';
import Wrapper from '../components/Wrapper.component';

const HomePage = (props) => {
    return (
        <Wrapper>
            <Content/>
            <Sidebar/>
        </Wrapper>
    );
}

export default HomePage;