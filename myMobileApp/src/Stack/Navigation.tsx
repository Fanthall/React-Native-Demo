import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../Home';
import {MusicData} from '../Detay';
import {Empty} from '../EmptyDetay';
import {EmptyUser} from '../UserData';
import deviceInfo from 'react-native-device-info';

const AppStack = createStackNavigator();

export const RootStack = () => {
  return (
    <AppStack.Navigator
      initialRouteName="Home"
      mode="card"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        animationEnabled: Platform.OS === 'ios' ? true : false,
      }}>
      <AppStack.Screen name="Home" component={Home} />
      {!deviceInfo.isTablet() && (
        <AppStack.Screen name="Detay" component={MusicData} />
      )}
      <AppStack.Screen name="DetayEmpty" component={Empty} />
      <AppStack.Screen name="UserEmpty" component={EmptyUser} />
    </AppStack.Navigator>
  );
};
