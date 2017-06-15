import React, { Component } from 'react';
import { 
  Text, 
  Content,
  List,
  ListItem,
  Button, 
  Container,
} from 'native-base';
import FooterApp from '../../Components/Footer/index';

export default class MapContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.book.title}`,
  });

  render() {
      let book = this.props.navigation.state.params.book;
      return (
          <Container>
              <Content>
                  <List>
                      <ListItem >
                          <Text>Title: {book.title}</Text>
                      </ListItem>
                      <ListItem >
                          <Text>Writer: {book.writer}</Text>
                      </ListItem>
                      <ListItem >
                          <Text>Editor: {book.editor}</Text>
                      </ListItem>
                      <ListItem >
                          <Text>Cover: {book.cover}</Text>
                      </ListItem>
                      <ListItem >
                          <Text>Page: {book.page}</Text>
                      </ListItem>
                      <ListItem >
                          <Text>Publisher: {book.publisher}</Text>
                      </ListItem>
                      <ListItem >
                          <Text>Year: {book.year}</Text>
                      </ListItem>
                  </List>
              </Content>

              <FooterApp {...this.props}/>
          </Container>
      );
    }
}