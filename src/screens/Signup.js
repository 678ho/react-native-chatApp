import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Conatiner = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Signup = () => {
    return (
        <Conatiner>
            <Text style={{ fontSize: 30}}>Signup Screen</Text>
        </Conatiner>
    );
};

export default Signup;
