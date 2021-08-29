import React from 'react'
import styled from 'styled-components';
import About from '../components/About';
import {Education} from '../components/Education';

const GlobalStyle = styled.div`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;

export const App = () => {
    return (
        <GlobalStyle>
            <About />
            <Education />
        </GlobalStyle>
    )
}
