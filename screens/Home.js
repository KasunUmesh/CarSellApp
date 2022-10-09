import {View, Text, Image, StatusBar, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';

const BASE_URL = 'https://dummyapi.io/data/v1/';
const APP_ID = '6342951607e51832293d258f';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

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

  const scrollY = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#ecf0f1'}}>
      {/* <Image
        source={require('../assets/home.png')}
        style={StyleSheet.absoluteFillobject}
        blurRadius={50}
      /> */}
      <Animated.FlatList
        data={data}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}
        keyExtractor={item => `key-${item.id}`}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.5),
          ];

          const scale = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255,255,255,0.8)',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 5,
                shadowRadius: 20,
                opacity,
                transform: [{scale}],
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
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
