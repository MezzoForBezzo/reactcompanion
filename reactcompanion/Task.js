import React from 'react';
import { Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import {Container, Content, Header, Body, Title} from 'native-base';

import CustomHeader from './CustomHeader';

export default class Task extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Task',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./companion.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
  constructor(props) {
    super(props);
    this.state = {title: 'Task',
    description: 'This is the task page'
    tasks: [
      {
        name: 'shower',
        description: 'take some time to look after yourself'
      },
      {
        name: 'medication',
        description: 'consistency is key! you can do it!'
      },
      {
        name: 'drink water',
        description: 'hydration makes everything easier :)'
      },
    ]
  };
}

render() {
  return (
    <Container>
      <CustomHeader title={this.state.title} link= {() => this.props.navigation.openDrawer()} description= {this.state.description} />
        <Content>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
});
