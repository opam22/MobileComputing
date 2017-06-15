import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { StackNavigator } from 'react-navigation';
import HomeScreen from './Home/HomeContainer';
import ReferenceScreen from './Reference/ReferenceContainer';
import DetailScreen from './Reference/Detail/index';
import VideoScreen from './Video/VideoContainer';
import MapScreen from './Map/MapContainer';

import rootReducers from './reducers'
const createStoreMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreMiddleware(rootReducers)

const Routes = StackNavigator({
  Home: { screen: HomeScreen },
  Reference: {screen: ReferenceScreen},
  Video: {screen: VideoScreen},
  Map: {screen: MapScreen},
  Detail: {screen: DetailScreen}
});

export default class MobileComputing extends Component {
  render() {
    return (
     <Provider store={store}>
     	<Routes />
     </Provider>
    );
  }
}

AppRegistry.registerComponent('MobileComputing', () => MobileComputing);