import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import styles from '../style/styles';

export default function Detail(tab) {
    
    itemName = tab.navigation.getParam('name', 'NO_NAME');
    itemContent = tab.navigation.getParam('content', 'NO_CONTENT');
    itemPrice = tab.navigation.getParam('price', 'NO_PRICE');

    return (
        <Container>
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
