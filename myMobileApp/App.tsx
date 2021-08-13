/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {styles, colors, fonts} from './src/Styles';
import {Text, View} from 'react-native';
import {RootStack} from './src/Stack/Navigation';
import {InfoStack} from './src/Stack/NavigationDetail';
import {Header} from './src/Header';

import deviceInfo from 'react-native-device-info';
const App: () => Node = () => {
  if (deviceInfo.isTablet()) {
    console.log('Tablet');
    return (
      <View style={[styles.TabletMain]}>
        <NavigationContainer independent={true}>
          <View style={[styles.LeftWindow]}>
            <View style={[styles.container]}>
              <Header style={[styles.header, colors.backDarkHead]} />

              <View style={[styles.main, colors.backDarkMain]}>
                <RootStack />
              </View>
              <View style={[styles.footer, colors.backDarkFoot]}>
                <Text style={[colors.gold, fonts.f15, styles.MarginB2]}>
                  Created by Fanthal
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.RightWindow]}>
            <InfoStack />
          </View>
        </NavigationContainer>
      </View>
    );
  } else {
    console.log('Phone');

    return (
      <NavigationContainer>
        <View style={[styles.container]}>
          <Header style={[styles.header, colors.backDarkHead]} />

          <View style={[styles.main, colors.backDarkMain]}>
            <RootStack />
          </View>
          <View style={[styles.footer, colors.backDarkFoot]}>
            <Text style={[colors.gold, fonts.f15, styles.MarginB2]}>
              Created by Fanthal
            </Text>
          </View>
        </View>
      </NavigationContainer>
    );
  }
};

export default App;
