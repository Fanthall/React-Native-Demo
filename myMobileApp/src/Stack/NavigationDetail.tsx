import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {MusicData} from '../Detay';
import {Empty} from '../EmptyDetay';

import {setDetailsNavigator} from '../Navigation/DetailNavigation';
import {NavigationContainer} from '@react-navigation/native';
const AppInfoStack = createStackNavigator();

export const InfoStack = () => {
  return (
    <NavigationContainer independent={true} ref={setDetailsNavigator}>
      <AppInfoStack.Navigator
        initialRouteName="DetayEmpty"
        mode="card"
        headerMode="none"
        screenOptions={{
          gestureEnabled: true,
          animationEnabled: Platform.OS === 'ios' ? true : false,
        }}>
        <AppInfoStack.Screen name="DetayEmpty" component={Empty} />
        <AppInfoStack.Screen name="Detay" component={MusicData} />
      </AppInfoStack.Navigator>
    </NavigationContainer>
  );
};
