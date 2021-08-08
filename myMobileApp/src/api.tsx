import axios, {CancelToken} from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import {Text, Image, View} from 'react-native';
import {styles, colors, fonts} from './Styles';

import variables from './variables';

export default function UserInfo() {
  const [name, setname] = useState('');
  const [URL, setURL] = useState('');
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
          variables.SpotfyApi.BaseUri + 'users/'+variables.SpotfyApi.UserID ,
          {
            headers: {
              Accept: 'application/json',
              Content: 'application/json',
              Authorization: variables.SpotfyApi.Oauth,
            },
          },
        );
        if (componentIsMounted.current) {
          setname(res.data.display_name);
          setURL(res.data.images[0].url);
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
    <>
      <View style={[styles.CenterContent]}>
        <Image
          style={[styles.tinyLogo, styles.bordeRadius]}
          source={{
            uri: URL,
          }}
        />
        <Text style={[colors.floralwhite, fonts.f10]}>{name}</Text>
      </View>
    </>
  );
}
