import React from 'react';
import { TextInput, TouchableOpacity, Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import {Container, Content, Header, Body, Title, CardItem } from 'native-base';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'

import call from 'react-native-phone-call'; //this won't run on ios
import SendSMS from 'react-native-sms'
import CustomHeader from './CustomHeader';

export default class Crisis extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Crisis',
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
      title: 'Crisis',
      description: 'Hey there, here you can talk to someone you know or call a hotline',
      contact_name: 'Jim',
      contact_number: '+64272727272',
      newContact: false,
      hotlines: false
    }
    this.handle_contact_name = (name) => {
       this.setState({ contact_name: name })
    }
    this.handle_contact_number = (number) => {
       this.setState({ contact_number: number })
    }
}
callNumber(name, number){

  if (Platform.OS == 'ios') {
    return alert("this wont work for iOS but it would have called: " + name + " on :" + number);
  }
  else {
     call(args).catch(console.error)
  }
}
sendSMS(number){
  SendSMS.send({
    body: 'Hey im not doing too good can you call?',
    recipients: [number],
    successTypes: ['sent', 'queued'],
    allowAndroidSendWithoutReadPermission: true
  }, (completed, cancelled, error) => {
    console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);
  });
}

displayHotlines() {
  if(this.state.hotlines) {
    return(
      <Card style={{ borderRadius: 15 }}>
        <CardTitle
          title="Free hotlines"
        />
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
            title="Need to talk? (1737, free txt)"
            onPress={() => this.sendSMS('1737')}
            color="blue"
            />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Depression Helpline"
          onPress={() => this.callNumber("Depression Helpline", '0800111757')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Suicide Prevention Helpline"
          onPress={() => this.callNumber("Suicide Prevention Helpline", '0508828865')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Lifeline"
          onPress={() => this.callNumber("Lifeline", '0800543354')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Samaritans"
          onPress={() => this.callNumber("Samaritans", '0800726666')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Youthline"
          onPress={() => this.callNumber("Youthline", '0800376633')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Alcoholics Anonymous"
          onPress={() => this.callNumber("Alcoholics Anonymous", '08002296757')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Narcotics Anonymous"
          onPress={() => this.callNumber("Narcotics Anonymous", '0800628632')}
          color="blue"
          />
        </CardAction>
          <CardAction
            separator={true}
            inColumn={false}>

        <CardButton
          title="Alcohol and Drug Hotline: General"
          onPress={() => this.callNumber("Alcohol and Drug Hotline: General", '0800787797')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Alcohol and Drug Hotline: Pasifika Line"
          onPress={() => this.callNumber("Alcohol and Drug Hotline: Pasifika Line", '0800787799')}
          color="blue"
          />
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <CardButton
          title="Close"
          onPress={() => this.showHotlines(false)}
          color="blue"
          />
        </CardAction>
      </Card>
    );
  };
}
newContact() {
  if(this.state.newContact) {
    return(
      <Card style={{ borderRadius: 15 }}>
      <CardTitle
        title="Add new emergency contact"
      />
        <CardAction
          separator={true}
          inColumn={false}>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Name"
            autoCapitalize = "none"
            onChangeText = {this.handle_contact_name}/>
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>

          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Number"
            autoCapitalize = "none"
            onChangeText = {this.handle_contact_number}/>
        </CardAction>
        <CardAction
          separator={true}
          inColumn={false}>
          <TouchableOpacity
            style = {styles.submitButton}
            onPress = {
              () => this.newContactShow(false)
            }>
            <Text style = {styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </CardAction>
      </Card>
    );
  };
}

newContactShow(state){
  this.setState({newContact: this.state.newContact = state});
}

showHotlines(state){
  this.setState({hotlines: this.state.hotlines = state});
}

render() {
  return (
    <Container>
      <CustomHeader title={this.state.title} link= {() => this.props.navigation.openDrawer()} description= {this.state.description} />
        <Content>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Card style={{ borderRadius: 15 }}>
            <CardTitle
              title="Are you ok?"
              subtitle="Call someone you know or talk to someone from our hotlines below"
            />

              <CardTitle title="Contact"/>
              <CardContent text={"Name: "+this.state.contact_name} />
              <CardContent text={"Number: "+this.state.contact_number} />

            <CardAction
              separator={true}
              inColumn={false}>

            <CardButton
              onPress={() => this.callNumber(this.state.contact_name, this.state.contact_number)}
              title={"Call Contact?"}
              color="blue"
            />
            <CardButton
              onPress={() => this.sendSMS(this.state.contact_number)}
              title={"TXT Contact?"}
              color="green"
            />
            </CardAction>

            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
                onPress={() => this.newContactShow(true)}
                title="Enter new Emergency Contact?"
                color="blue"
              />
            </CardAction>

            <CardAction
              separator={true}
              inColumn={false}>
              <CardButton
                onPress={() => this.showHotlines(true)}
                title="Hotlines"
                color="blue"
              />
            </CardAction>
          </Card>

          {this.newContact()}

          {this.displayHotlines()}

          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Go back home"
          />
          <Button
            title="Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Menu"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </View>
        </Content>
      </Container>
    );

  }
}
const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    padding: 10,
     margin: 15,
     height: 40,
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#fff',
     borderWidth: 1,
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
    textAlign: 'center',
     color: 'blue'
  }
});
