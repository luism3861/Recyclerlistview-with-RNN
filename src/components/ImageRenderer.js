import React from 'react';
import {Image, View} from 'react-native';

export const ImageRenderer = ({imageUrl}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        source={{uri: imageUrl}}
      />
    </View>
  );
};
