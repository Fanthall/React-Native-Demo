import React, {
  useState,
  FunctionComponent,
  useEffect,
  useRef,
  refreshInUrl,
} from 'react';
import axios, {CancelToken} from 'axios';
import {
  Text,
  Image,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {styles, colors, fonts} from './Styles'; /*

  import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';

  import constants, {paramKeys} from '../constants';*/
import variables from './variables';

export const Empty = ({route}) => {
  console.log('route.params');
  console.log(route.params);
  return (
    <View style={[styles.mainDetay, colors.backDarkMain]}>
      <View style={[styles.row, styles.CenterContent]}>
        <Text
          style={[
            colors.green,
            fonts.f20,
            styles.textContentCenter,
            styles.row,
          ]}>
          Music Info
        </Text>
      </View>
      <View style={[pageStyles.Body, pageStyles.container]}>
        <Text
          style={[
            colors.floralwhite,
            fonts.f20,
            styles.textContentCenter,
            styles.row,
          ]}>
          Müzik seçin
        </Text>
      </View>
    </View>
  );
};

const pageStyles = StyleSheet.create({
  Body: {
    flexDirection: 'column',
    flex: 10,
  },
  container: {
    flex: 1,
    alignContent: 'flex-start',
  },
});
