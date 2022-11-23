import AsyncStorage from '@react-native-async-storage/async-storage';

const Result = (success, message) => {
  return {success, message};
};
const Song = ({name, artist, mbid, albumMbid, albumName, covers, time}) => {
  return {name, artist, mbid, albumMbid, albumName, covers, time};
};

class Storage {
  storageKey = '@MusicPlayerApp';
  init = async storageKey => {
    try {
      await AsyncStorage.setItem(storageKey, null);
    } catch (ex) {
      console.log(ex);
    }
  };
  constructor(init, storageKey) {
    this.init = init;
    this.storageKey = storageKey;
    this.init(this.storageKey);
  }

  defineElement = e => {
    switch (typeof e) {
      case 'string':
        return TypeError(`Cant store string to storage ${e}`);
      case 'object':
        return e;
    }
  };
  addData = async data => {
    try {
      value = this.defineElement(data);
      await AsyncStorage.mergeItem(this.storageKey, value);
      return Result(true, value);
    } catch (ex) {
      console.log(ex);
    }
  };
  getData = async (key = '') => {
    try {
      await AsyncStorage.getItem(this.storageKey).then(res => {
        if (res == '') return Result(true, res);
        jsonRes = JSON.parse(res);
        if (key !== '' && jsonRes.hasOwnProperty(key)) {
          return Result(true, jsonRes[key]);
        }
        return Result(true, jsonRes);
      });
    } catch (ex) {
      return Result(false, ex);
    }
  };
  removeData = async (key = '') => {
    if (key === '') {
      try {
        await AsyncStorage.removeItem(this.storageKey);
        return Result(true, 'Data Cleared!');
      } catch (ex) {
        console.log(ex);
      }
    } else {
      await this.getData(key).then(async res => {
        jsonRes = JSON.parse(res);
        if (jsonRes.hasOwnProperty(key)) {
          delete jsonRes[key];
          try {
            await this.addData(jsonRes);
            return Result(true, jsonRes);
          } catch (ex) {
            console.log(ex);
          }
        } else {
          return Result(false, `No Key found for ${key}`);
        }
      });
    }
  };
  addSongToList = async song => {
    csong = this.defineElement(song);
    songToAdd = Song({...csong});
    try {
      await this.getData('SongsList').then(async res => {
        if (!res.success) {
          songsList = {SongsList: [songToAdd]};
        } else {
          songsList = res.message;
          if (!Array.isArray(songsList)) {
            songsList.push(songToAdd);
          }
        }
        try {
          await this.addData(songsList);
          return Result(true, songsList.SongsList);
        } catch (ex) {
          console.log(ex);
        }
      });
    } catch (ex) {
      console.log(ex);
    }
  };
}
export default Storage;
