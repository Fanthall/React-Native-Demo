import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styles, colors, fonts} from './Styles';

export const EmptyUser = ({route}) => {
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
          Kullanıcı Bilgileri
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
          Test
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
