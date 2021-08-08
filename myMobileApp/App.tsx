/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';

import {Text, View, Image} from 'react-native';

import {styles, colors, fonts} from './src/Styles';
import UserInfo from './src/api';
import MusicInfo from './src/MusicApi';

const App: () => Node = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.header, colors.backDarkHead]}>
        <View style={[styles.headerLogoView]}>
          <Image
            style={[styles.tinyLogo, styles.bordeRadius]}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png',
            }}
          />
        </View>
        <View style={[styles.headerTitleView]}>
          <Text style={[colors.floralwhite, fonts.f20]}>Spotfy History </Text>
        </View>
        <View style={[styles.headerUserView]}>
          <UserInfo />
        </View>
      </View>
      <View style={[styles.main, colors.backDarkMain]}>
        <View style={[styles.contentCenter]}>
          <Text
            style={[colors.floralwhite, fonts.f20, styles.textContentCenter]}>
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
      <View style={[styles.footer, colors.backDarkFoot]}>
        <Text style={[colors.gold, fonts.f15]}>Created by Fanthal</Text>
      </View>
    </View>
  );
};

export default App;
