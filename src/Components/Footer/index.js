import React, { Component } from 'react';
import { 
  Footer,
  FooterTab,
  Button,
  Icon } from 'native-base';

export default class FooterApp extends Component {
  render() {
      const { navigate } = this.props.navigation;

      return (
              <Footer >
                  <FooterTab>
                      <Button
                        onPress={() => navigate('Home')}
                        title='Home'
                      >
                          <Icon name='apps' />
                      </Button>

                      <Button
                        onPress={() => navigate('Video')}
                        title='Video'
                      >
                          <Icon name='film' />
                      </Button>

                      <Button
                        onPress={() => navigate('Map')}
                        title='Map'
                      >
                          <Icon name='navigate' />
                      </Button>

                      <Button
                        onPress={() => navigate('Home')}
                        title='Home'
                      >
                          <Icon name='person' />
                      </Button>
                  </FooterTab>
              </Footer>
      );
    }
}