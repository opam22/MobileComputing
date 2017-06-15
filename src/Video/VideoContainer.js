import React, { Component } from 'react';
import { 
  Text, 
  Content,
  List,
  ListItem,
  Button, 
  Container,
} from 'native-base';
import YouTube from 'react-native-youtube';
import FooterApp from '../Components/Footer/index';

export default class VideoContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Video`,
  });

  render() {
      return (
          <Container>
              <Content>
                  <Text> HEEEEE </Text>
              </Content>

              <FooterApp {...this.props}/>
          </Container>
      );
    }
}