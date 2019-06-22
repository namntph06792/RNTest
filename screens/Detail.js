import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import styles from '../style/styles';

export default function Detail(props) {

    const itemName = props.navigation.getParam('name', 'NO_NAME');
    const itemContent = props.navigation.getParam('content', 'NO_CONTENT');
    const itemPrice = props.navigation.getParam('price', 'NO_PRICE');

    return (
        <Container>
            <Header />
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../assets/react-native.png')} />
                            <Body>
                                <Text>React Native</Text>
                                <Text note>{itemName}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'https://www.innofied.com/wp-content/uploads/2018/12/2018-12-06.jpg' }} style={{ height: 200, width: 200, flex: 1 }} />
                            <Text>
                            {itemContent}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>{itemPrice}</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
