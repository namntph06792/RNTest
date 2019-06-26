import React from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import styles from '../style/styles';

export default function Detail(props) {
    
    invoice = props.navigation.getParam('Invoice', 'NO_NAME');

    return (
        <Container>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Left>
                            <Thumbnail source={require('../assets/item.png')} />
                            <Body>
                                <Text>React Native</Text>
                                <Text note>{invoice.name}</Text>
                            </Body>
                        </Left>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Image source={{ uri: 'https://www.innofied.com/wp-content/uploads/2018/12/2018-12-06.jpg' }} style={styles.item_image} />
                            <Text>
                            {invoice.content}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Button transparent textStyle={{ color: '#87838B' }}>
                                <Icon name="logo-github" />
                                <Text>{invoice.price}</Text>
                            </Button>
                        </Left>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
}
