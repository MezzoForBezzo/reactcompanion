import React from 'react';
import { TextInput, Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import {Container, Content, Header, Footer, Body, Title, Item} from 'native-base';
import TimerMixin from 'react-timer-mixin';

import CustomHeader from './CustomHeader';

export default class Vent extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Vent',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./companion.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {title: 'Vent',
      description: "Welcome to the ETHER!!!! Here you can send a message to noone and they won't judge you or be offended by what you have to say. Just enter some words below and see it disappear!! oohhhhhh......",
      text: '',
      message: '',
      messages: [],
  };
}
sendMessage(){
  const {text} = this.state;
  this.setState({message: this.state.text}, () =>
    this.setState(prevState => ({
      messages: [...prevState.messages, this.state.message]
      })),
        this.clearText(),

  );
  this.timeout = setInterval(() => {
    this.removeMessage();
  }, 5000);
}

removeMessage() {
  this.setState({message: this.state.messages.splice(0, 1)});
}
clearText() {
  this.textInput.clear();

}

render() {
  const messagesToDisplay = this.state.messages.map(
    (message, i)=> <View style={styles.ventMessage} key={i}>
      <Text style={styles.ventMessageText} >{message}</Text>
    </View>);

  return (

    <Container>
      <CustomHeader title={this.state.title} link= {() => this.props.navigation.openDrawer()} description= {this.state.description} />
        <Content>
          {messagesToDisplay}
        </Content>
        <Footer>
          <View style={styles.ventFooter}>
            <View style={styles.ventInput}>
              <TextInput
                ref={input => { this.textInput = input }}
                placeholder="Vent here!"
                style={{height: 40, flex:1, borderRadius: 20 ,borderColor: 'gray', borderWidth: 1, padding:10}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}></TextInput>
            </View>
            <View style={styles.sendButton}>
            <Button
              style={{alignItems: 'Right'}}
              onPress={
                () => this.sendMessage()}
              title="Send"
            />
            </View>
          </View>
        </Footer>
      </Container>
    );

  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
      alignItems: 'center',
      marginTop: 100,
      padding: 20
   },
  ventInput: {
    flex: 6,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding:10,
  },
  sendButton: {
    flex: 1,
    width: 60,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ventFooter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ventMessage: {
    flex: 1,
    marginTop: 20,
    marginLeft: 60,
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#00abff'
  },
  ventMessageText: {
    textAlign: 'right',
    fontSize: 16,
    color: '#fff'
  }
});
