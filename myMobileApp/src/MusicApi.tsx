import axios, {CancelToken} from 'axios';
import React, {useState, useEffect, useRef, refreshInUrl} from 'react';
import {Text, Image, View, FlatList, SafeAreaView} from 'react-native';
import {styles, colors, fonts} from './Styles';

import variables from './variables';

interface SpotfyData {
  URL: string;
  ArtistName: string;
  MusicName: string;
}

const Item = ({Artist, Music, URL}) => (
  <View style={[styles.CenterContent, styles.row, styles.MusicRow]}>
    <Image
      style={[styles.musicsLogo, styles.logo, styles.bordeRadius]}
      source={{
        uri: URL,
      }}
    />
    <Text
      style={[
        colors.floralwhite,
        fonts.f15,
        styles.musicsArtist,
        styles.textContentCenter,
      ]}>
      {Artist}
    </Text>
    <Text
      style={[
        colors.floralwhite,
        fonts.f15,
        styles.musicsName,
        styles.textContentCenter,
      ]}>
      {Music}
    </Text>
  </View>
);

const datas = [];
export default MusicInfo = () => {
  const [name, setname] = useState('');
  const componentIsMounted = useRef(true);
  const [refreshInterval, setRefreshInterval] = useState(refreshInUrl || 0);

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setRefreshInterval(10000);
    const cancelTokenSource = CancelToken.source();

    async function getDatas() {
      try {
        const res = await axios.get(
          variables.SpotfyApi.BaseUri + 'me/player/currently-playing?market=ES',
          {
            headers: {
              Accept: 'application/json',
              Content: 'application/json',
              Authorization: variables.SpotfyApi.Oauth,
            },
          },
        );
        if (componentIsMounted.current) {
          const tempData: SpotfyData = {
            URL: res.data.item.album.images[0].url,
            ArtistName: res.data.item.album.artists[0].name,
            MusicName: res.data.item.name,
          };
          if (tempData.ArtistName != '') {
            if (datas.length == 0) {
              datas.splice(0, 0, tempData);
            } else if (datas[0].MusicName != tempData.MusicName) {
              datas.splice(0, 0, tempData);
            }
          }
          setname(res.data.item.album.artists[0].name);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          return console.info(err);
        }
        return console.error(err);
      }
    }
    getDatas();
    if (refreshInterval && refreshInterval > 0) {
      const interval = setInterval(getDatas, refreshInterval);
      return () => clearInterval(interval);
    }
    return () => {
      cancelTokenSource.cancel(
        'Cancelling previous http call because a new one was made ;-)',
      );
    };
  }, [refreshInterval]);

  const renderItem = ({item}) => (
    <Item Artist={item.ArtistName} Music={item.MusicName} URL={item.URL} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={datas}
        renderItem={renderItem}
        keyExtractor={item => {
          item.ArtistName, item.MusicName, item.URL;
        }}
      />
    </SafeAreaView>
  );
};
