import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../assets';
import {SongsList} from '../components';

const SongsListScreen = () => {
  const DUMMY_SONGS_LIST = [
    {
      name: 'One More Night',
      mbid: '7c1fce2d-5f5b-4a5b-8287-d3452ae3677f',
      artist: 'Maroon 5',
      covers: {
        small:
          'https://lastfm.freetls.fastly.net/i/u/34s/caad5e3030e9bdeee7b4075641b516ee.png',
        medium:
          'https://lastfm.freetls.fastly.net/i/u/64s/caad5e3030e9bdeee7b4075641b516ee.png',
        large:
          'https://lastfm.freetls.fastly.net/i/u/174s/caad5e3030e9bdeee7b4075641b516ee.png',
        extralarge:
          'https://lastfm.freetls.fastly.net/i/u/300x300/caad5e3030e9bdeee7b4075641b516ee.png',
      },
      albumName: 'Overexposed',
      albumMbid: 'ff633079-f4de-4d2f-83ea-24e0d5d3f411',
      time: 219000,
      // cover: Logo,
    },
    {
      name: 'Give Me A Kiss',
      artist: 'Crash Adams',
      covers: {
        small:
          'https://lastfm.freetls.fastly.net/i/u/34s/f900f5218df4fed950ebccb2c87c1cc8.png',
        medium:
          'https://lastfm.freetls.fastly.net/i/u/64s/f900f5218df4fed950ebccb2c87c1cc8.png',
        large:
          'https://lastfm.freetls.fastly.net/i/u/174s/f900f5218df4fed950ebccb2c87c1cc8.png',
        extralarge:
          'https://lastfm.freetls.fastly.net/i/u/300x300/f900f5218df4fed950ebccb2c87c1cc8.png',
      },
      albumName: 'Give Me a Kiss - Single',
      time: 219000,
    },
    {
      name: 'Animals',
      mbid: '7c0ed007-5118-4086-917a-fd9cfb0d338e',
      artist: 'Maroon 5',
      covers: {
        small:
          'https://lastfm.freetls.fastly.net/i/u/34s/9dcbbb2587be11cca47d21f0619b49df.png',
        medium:
          'https://lastfm.freetls.fastly.net/i/u/64s/9dcbbb2587be11cca47d21f0619b49df.png',
        large:
          'https://lastfm.freetls.fastly.net/i/u/174s/9dcbbb2587be11cca47d21f0619b49df.png',
        extralarge:
          'https://lastfm.freetls.fastly.net/i/u/300x300/9dcbbb2587be11cca47d21f0619b49df.png',
      },
      albumName: 'V',
      albumMbid: 'e8fe33d4-31a6-4394-941c-45fac8834322',
      time: 230000,
    },
    {
      name: 'Forget Me',
      artist: 'Lewis Capaldi',
      covers: {
        small:
          'https://lastfm.freetls.fastly.net/i/u/34s/ff32a83c3faf844b66f4789f3ad0d9e0.png',
        medium:
          'https://lastfm.freetls.fastly.net/i/u/64s/ff32a83c3faf844b66f4789f3ad0d9e0.png',
        large:
          'https://lastfm.freetls.fastly.net/i/u/174s/ff32a83c3faf844b66f4789f3ad0d9e0.png',
        extralarge:
          'https://lastfm.freetls.fastly.net/i/u/300x300/ff32a83c3faf844b66f4789f3ad0d9e0.png',
      },
      albumName: 'Forget Me',
      time: 203000,
    },
  ];
  return (
    <View>
      <View></View>
      <SongsList songsList={DUMMY_SONGS_LIST} />
    </View>
  );
};

export default SongsListScreen;

const styles = StyleSheet.create({});
