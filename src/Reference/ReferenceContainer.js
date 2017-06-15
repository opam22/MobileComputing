import React, { Component } from 'react';
import { Container } from 'native-base';
import FooterApp from '../Components/Footer/index';
import Reference from './Reference';
import { fetchReference } from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    references : state.references
  }
}

export class ReferenceContainer extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Referensi Kelas ${navigation.state.params.kelas}`,
  });

  componentDidMount(){
    let classReference = this.props.navigation.state.params.kelas;
    this.props.fetchReference( classReference );
  }

  render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>

              <Reference {...this.props} />

              <FooterApp {...this.props} />

            </Container>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchReference }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ReferenceContainer);