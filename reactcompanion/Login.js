import React from 'react';
import { TextInput, TouchableOpacity, Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import {Container, Content, Header, Body, Title} from 'native-base';

import CustomHeader from './CustomHeader';

export default class Login extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Login',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./companion.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {
      title: 'Login',
      description: 'This is the login page',
      email: '',
      password: ''
    }
    this.handleEmail = (text) => {
       this.setState({ email: text })
    }
    this.handlePassword = (text) => {
       this.setState({ password: text })
    }
    this.login = (email, pass) => {
       alert('email: ' + email + ' password: ' + pass)
    }
}

  render(){
     return (
        <View style = {styles.container}>
           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Email"
              autoCapitalize = "none"
              onChangeText = {this.handleEmail}/>

           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "Password"
              autoCapitalize = "none"
              onChangeText = {this.handlePassword}/>

           <TouchableOpacity
              style = {styles.submitButton}
              onPress = {
                 () => this.login(this.state.email, this.state.password),
                 () => this.props.navigation.navigate('Home')
              }>
              <Text style = {styles.submitButtonText}> Submit </Text>
           </TouchableOpacity>
        </View>
     )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
     paddingTop: 23
  },
  input: {
    padding: 10,
     margin: 15,
     height: 40,
     borderWidth: 1,
    borderRadius: 20
  },
  submitButton: {
     backgroundColor: '#fff',
     borderWidth: 1,
     padding: 10,
     margin: 15,
     height: 40,
    borderRadius: 20
  },
  submitButtonText:{
    textAlign: 'center',
     color: 'black'
  }
})
