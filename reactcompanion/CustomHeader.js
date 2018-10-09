import React from "react";
import { Button, Alert, Image, Icon, View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { StackNavigator, DrawerItems, SafeAreaView, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {Container, Content, Header, Body, Title} from 'native-base';

import LinearGradient from "react-native-linear-gradient";

class CustomHeader extends React.Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render() {
    return (
      <Header style={{backgroundColor:'#fff'}}>
        <StatusBar barStyle="dark-content" ></StatusBar>
        <View style={ styles.header }>
            <View style={{flex: 1}}>
              <Button ref={component => this._root = component} {...this.props} style={{alignItems: 'Left'}} onPress={this.props.link} title="Menu" color="gray" />
            </View>
            <View ref={component => this._root = component} {...this.props} style={{alignItems: 'center', flex: 4}}>
              <Title style={{color:'#000'}}>{this.props.title}</Title>
            </View>
            <View ref={component => this._root = component} {...this.props} style={{flex: 1}}>
              <Button style={{alignItems: 'Right'}} onPress={() => Alert.alert(this.props.title, this.props.description)} title="Info" color="gray" />
            </View>
        </View>
      </Header>
    )
  }
}
// <Container>
//   <Header>
//     <Left>
//       <Button transparent ref={component => this._root = component} {...this.props} style={{alignItems: 'auto'}} onPress={this.props.link} title="Menu" color="#000" >
//         <Icon name="ios-menu" size={30} color="#900" />
//       </Button>
//     </Left>
//     <Body ref={component => this._root = component} {...this.props} style={{alignItems: 'center', flex: 4}}>
//       <Title style={{color:'#000'}}>{this.props.title}</Title>
//     </Body>
//     <Right>
//       <Button ref={component => this._root = component} {...this.props} style={{alignItems: 'auto'}} onPress={() => alert(this.props.description)} title="Info" color="#000">
//         <Icon name="ios-menu" size={30} color="#900" />
//       </Button>
//     </Right>
//   </Header>
// </Container>
export default CustomHeader;

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: this.width,
    backgroundColor: '#fff',
  },
});
