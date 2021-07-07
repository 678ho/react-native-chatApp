import React from 'react';
import styled from 'styled-components/native';
import { Text, Button } from 'react-native';

const Conatiner = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.background};
`;

const Login = ({ navigation }) => {
    return(
        <Conatiner>
            <Text style={{ fontSize: 30}}>Signin Screen</Text>
            <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
        </Conatiner>
    );
};

export default Login;