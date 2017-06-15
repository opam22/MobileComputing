import React, { Component } from 'react';
import { Image } from 'react-native';
import { 
  Text, 
  Content,
  List,
  ListItem,
  Button,
  Icon
} from 'native-base';

export default class Home extends Component {
  render() {
        const { navigate } = this.props.navigation;
        return (
            <Content>
                <List>
                    <ListItem >
                        <Icon name='pulse' />
                    </ListItem>
                    <ListItem
                      onPress={() => navigate('Reference', { kelas: 10 })}
                      title="Referensi Kelas 10"
                    >
                        <Text>Kelas 10</Text>
                    </ListItem>

                    <ListItem
                      onPress={() => navigate('Reference', { kelas: 11 })}
                      title="Referensi Kelas 11"
                    >
                        <Text>Kelas 11</Text>
                    </ListItem>

                    <ListItem
                      onPress={() => navigate('Reference', { kelas: 12 })}
                      title="Referensi Kelas 12"
                    >
                        <Text>Kelas 12</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}