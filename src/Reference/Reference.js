import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

export default class Reference extends Component {
    render() {
        const { navigate } = this.props.navigation;
        const { references } = this.props;
        return (
            <Container>
                <Content>
                    {
                        references.map((reference) => {
                            return (
                                 <Card style={{ flex: 1 }} key={reference.id}>
                                     <CardItem>
                                         <Left>
                                             <Body>
                                                 <Text>{reference.title}</Text>
                                                 <Text note>{reference.writer}</Text>
                                             </Body>
                                         </Left>
                                     </CardItem>
                                     <CardItem>
                                         <Body>
                                             <Image style={{ resizeMode: 'cover', height: 200, width: 360}} source={{ uri: reference.image }} />
                                             <Button transparent textStyle={{color: '#87838B'}}
                                                onPress={() => navigate('Detail', { book: reference })}
                                                title="Detail"
                                             >
                                                 <Text>Detail</Text>
                                                 <Icon name="arrow-forward" />
                                             </Button>
                                         </Body>
                                     </CardItem>
                                </Card>
                            );
                        })  
                    }
                    
                    
                </Content>
            </Container>
        );
    }
}