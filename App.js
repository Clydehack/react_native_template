/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View , TouchableHighlight, Button} from 'react-native';

add=()=>{
  var url = 'http://47.105.162.113:9001'+'/xiaocar/mobile/addMobile?m1=60';
  var text = '';

  fetch(url).then((response)=>response.text())//.json())
            .then(
                (response)=> {
                  text = response;
                  alert(response);
                }
            ).catch((error)=>console.error(error))
}
query=()=>{
  var url = 'http://47.105.162.113:9001'+'/xiaocar/mobile/queryMobile?pk=12';
  var text = '';

  fetch(url).then((response)=>response.text())//.json())
            .then(
                (response)=> {
                    text = response;
                    alert(response);
                }
            ).catch((error)=>console.error(error))
}

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={()=>{add()}}
          title="add m1=60"
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        <Button onPress={()=>{query()}}
          title="query m1=5"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  login:{
    fontSize:26,
    margin:20,
    textAlign:'center',
    color:'#fff',
    // backgroundColor:'#333',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
