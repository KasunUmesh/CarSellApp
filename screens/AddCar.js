import {View, Text} from 'react-native';
import React from 'react';

const AddPostView = ({newImages, addImage}) => {
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide} key={index}>
        <Image
          style={{
            width: '88%',
            borderRadius: 15,
            height: 200,
          }}
          source={{uri: item.path}}
        />
        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}></View>
      </View>
    );
  };
};

export default function AddCar() {
  return <View></View>;
}
