import React, { Component } from 'react';
import { 
  Container,
} from 'native-base';
import Home from './Home';
import FooterApp from '../Components/Footer/index';
// vim
export default class HomeContainer extends Component {
  static navigationOptions = {
    title: 'Welcome',
  };

  render() {
      return (
          <Container>
              <Home {...this.props}/>

              <FooterApp {...this.props}/>
          </Container>
      );
    }
}