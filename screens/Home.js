import React from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';

export default function Home(props) {
    return (
        <Container>
            <Content>
                <Button rounded onPress={() => props.navigation.navigate('Add')}>
                    <Text>Add</Text>
                </Button>
                <Button rounded onPress={() => props.navigation.navigate('List')}>
                    <Text>List</Text>
                </Button>
            </Content>
        </Container>
    );
}
