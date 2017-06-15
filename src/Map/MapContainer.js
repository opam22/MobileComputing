import React, { Component } from 'react';
import {
  Dimensions,
  View
} from 'react-native';
import { 
  Text, 
  Content,
  List,
  ListItem,
  Button, 
  Container,
} from 'native-base';
import FooterApp from '../Components/Footer/index';
import MapView from 'react-native-maps';
const { height, width } = Dimensions.get('window');
const ASPECT_RATIO = width / height;

// (Initial Static Location) Mumbai
const LATITUDE = 19.0760;
const LONGITUDE = 72.8777;

const LATITUDE_DELTA = 0.01;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Map`,
  });

  constructor(props) {
    super(props);
    this.state = {
      mapRegion: null,
      lastLat: null,
      lastLong: null,
    };
    this.onRegionChange = this.onRegionChange.bind(this);
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }


  render() {
      return (
          <Container>
              <Content>
                <View>
                  <Text style={{color: '#000'}}>
                    { this.state.lastLong } / { this.state.lastLat }
                  </Text>
                </View>
                <MapView
                  style={{width: width, height: height}}
                  region={this.state.mapRegion}
                  showsUserLocation={true}
                  followUserLocation={true}
                  onRegionChange={this.onRegionChange.bind(this)}>
                  <MapView.Marker
                    coordinate={{
                      latitude: (this.state.lastLat + 0.00050) || -36.82339,
                      longitude: (this.state.lastLong + 0.00050) || -73.03569,
                    }}>
                    
                  </MapView.Marker>
                </MapView>
              </Content>

              <FooterApp {...this.props}/>
          </Container>
      );
    }
}