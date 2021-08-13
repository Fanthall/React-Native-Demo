import React from 'react';

import {Text, View, Image} from 'react-native';

import {styles, colors, fonts} from './Styles';
import UserInfo from './api';
import MusicInfo from './MusicApi';

export const Home = () => {
  return (
    <View style={[styles.main, colors.backDarkMain]}>
      <View style={[styles.contentCenter]}>
        <Text style={[colors.floralwhite, fonts.f20, styles.textContentCenter]}>
          Music Lists{' '}
        </Text>
      </View>
      <View style={[styles.CenterContent, styles.row, styles.marginbottom5]}>
        <Text
          style={[
            colors.floralwhite,
            fonts.f15,
            styles.textContentCenter,
            styles.musicsLogo,
          ]}>
          Pictures
        </Text>
        <Text
          style={[
            colors.floralwhite,
            fonts.f15,
            styles.musicsArtist,
            styles.textContentCenter,
          ]}>
          Artist Name
        </Text>
        <Text
          style={[
            colors.floralwhite,
            fonts.f15,
            styles.musicsName,
            styles.textContentCenter,
          ]}>
          Music Name
        </Text>
      </View>
      <MusicInfo />
      </View>
  );
};
