import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const BASE_URL = 'https://dummyapi.io/data/v1/';
const APP_ID = '6342951607e51832293d258f';

const SPACING = 20;
const AVATAR_SIZE = 70;

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    getAllUsers();
    return () => {};
  }, []);

  getAllUsers = () => {
    fetch(`${BASE_URL}/user`, {headers: {'app-id': APP_ID}})
      .then(res => res.json())
      .then(resJson => {
        setData(resJson.data);
      })
      .catch(console.error)
      .finally(() => setIsloading(false));
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={data}
        keyExtractor={item => `key-${item.id}`}
        contentContainerStyle={{
          padding: SPACING,
        }}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'red',
                borderRadius: 12,
              }}>
              <Image
                source={{uri: item.picture}}
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                }}
              />
              <View>
                <Text>{item.title}</Text>
                <Text>{item.firstName}</Text>
                <Text>{item.lastName}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
