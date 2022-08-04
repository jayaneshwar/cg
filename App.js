/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import useDimensions from 'react-native-use-dimensions';
import { useDeviceOrientation } from '@react-native-community/hooks/lib/useDeviceOrientation';
import RegistrationScreen from './components/RegistrationScreen';
import Form from './components/Form';

function App ()  {

  console.log(Dimensions.get("screen"));
  console.log(useDimensions());
  const {landscape} = useDeviceOrientation();

  return (
    // <SafeAreaView style={styles.container}>
    //   <View style = {{
    //     backgroundColor : 'dodgerblue',
    //     width : "100%" ,
    //     height : landscape ? '100%' : '30%'
    //   }}>

    //   </View>      
    // </SafeAreaView>
    <>      
      {/* <RegistrationScreen/> */}
      <Form/>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default App;
