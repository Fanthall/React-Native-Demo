import React, {useState, useEffect, useRef} from 'react';
import axios, {CancelToken} from 'axios';
import {Text, Image, View, StyleSheet} from 'react-native';
import {styles, colors, fonts} from './Styles'; /*

import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';

import constants, {paramKeys} from '../constants';*/
import variables from './variables';

interface MusicInfo {
  Name: string;
  Artist: Array<string>;
  Album: string;
  AlbumType: string;
  Total: number;
  Order: number;
  ReleaseDate: string;
  PicURL: string;
}
/*const datas: MusicInfo = {
  Name: '',
  Artist: [],
  Album: '',
  AlbumType: '',
  Total: 0,
  Order: 0,
  ReleaseDate: '',
  PicURL: '',
};*/
export const MusicData = ({route}) => {
  const {ID} = route.params;
  const [datas, setdatas] = useState<MusicInfo>('');
  const componentIsMounted = useRef(true);
  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const cancelTokenSource = CancelToken.source();

    async function getDatas() {
      try {
        const res = await axios.get(
          variables.SpotfyApi.BaseUri + 'tracks/' + ID,
          {
            headers: {
              Accept: 'application/json',
              Content: 'application/json',
              Authorization: variables.SpotfyApi.Oauth,
            },
          },
        );
        if (componentIsMounted.current) {
          const temp: MusicInfo = {
            Name: '',
            Artist: [],
            Album: '',
            AlbumType: '',
            Total: 0,
            Order: 0,
            ReleaseDate: '',
            PicURL: '',
          };
          temp.Album = res.data.album.name;
          temp.AlbumType = res.data.album.album_type;
          temp.Total = res.data.album.total_tracks;
          temp.ReleaseDate = res.data.album.release_date;
          temp.Name = res.data.name;
          temp.Order = res.data.track_number;
          temp.PicURL = res.data.album.images[0].url;
          temp.Artist = res.data.artists.map((item, index) => {
            return (
              <Text style={[colors.floralwhite, styles.row]} key={index}>
                {item.name}
              </Text>
            );
          });
          setdatas(temp);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          return console.info(err);
        }
        return console.error(err);
      }
    }
    getDatas();
    return () => {
      cancelTokenSource.cancel(
        'Cancelling previous http call because a new one was made ;-)',
      );
    };
  }, []);
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
        <View style={[styles.CenterContent]}>
          <Image
            style={[styles.normalLogo, styles.bordeRadius]}
            source={{
              uri: datas.PicURL,
            }}
          />
        </View>
        <View style={[styles.CenterContent]}>
          <Text style={[colors.green, styles.row]}>Adı</Text>
          <Text style={[colors.floralwhite, styles.row]}>{datas.Name}</Text>
        </View>
        <View style={[styles.CenterContent]}>
          <Text style={[colors.green, styles.row]}>Şarkıcı</Text>
          {datas.Artist}
        </View>
        <View style={[styles.CenterContent]}>
          <Text style={[colors.green, styles.row]}>Albüm Adı</Text>
          <Text style={[colors.floralwhite, styles.row]}>{datas.Album}</Text>
        </View>
        <View style={[styles.CenterContent]}>
          <Text style={[colors.green, styles.row]}>Albüm Tipi</Text>
          <Text style={[colors.floralwhite, styles.row]}>
            {datas.AlbumType}
          </Text>
        </View>
        <View style={[styles.CenterContent]}>
          <Text style={[colors.green, styles.row]}>Albümde Şarkı Sayısı</Text>
          <Text style={[colors.floralwhite, styles.row]}>{datas.Total}</Text>
        </View>
        <View style={[styles.CenterContent]}>
          <Text style={[colors.green, styles.row]}>
            Şarkının Albümdeki Sırası
          </Text>
          <Text style={[colors.floralwhite, styles.row]}>{datas.Order}</Text>
        </View>
        <View style={[styles.CenterContent]}>
          <Text style={[colors.green, styles.row]}>Çıkış Tarihi</Text>
          <Text style={[colors.floralwhite, styles.row]}>
            {datas.ReleaseDate}
          </Text>
        </View>
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
