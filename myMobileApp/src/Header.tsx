import React from 'react';
import {styles, colors, fonts} from './Styles';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import UserInfo from './api';
import {useNavigation} from '@react-navigation/core';

export const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={[styles.header, colors.backDarkHead]}>
      <TouchableOpacity
        style={[styles.headerLogoView]}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <View>
          <Image
            style={[styles.tinyLogo, styles.bordeRadius]}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1024px-Spotify_logo_without_text.svg.png',
            }}
          />
        </View>
      </TouchableOpacity>
      <View style={[styles.headerTitleView]}>
        <Text style={[colors.floralwhite, fonts.f20]}>Spotfy History </Text>
      </View>
      <View style={[styles.headerUserView]}>
        <UserInfo />
      </View>
    </View>
  );
};
