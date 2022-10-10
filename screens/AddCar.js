import {View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  NativeBaseProvider,
  VStack,
  Center,
  Text,
  Input,
  Button,
} from 'native-base';

export default function AddCar() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bg={'#ffffff'} alignItems="center">
        <Center
          bg={'#E9EDF3'}
          height="27%"
          width={'90%'}
          marginTop="5"
          rounded={'2xl'}
          shadow="1">
          <TouchableOpacity>
            <Text fontSize={'2xl'}>Add an Image</Text>
          </TouchableOpacity>
        </Center>

        <Center width={'90%'} marginTop="10%">
          <Input variant="outline" placeholder="Vehicle Name" />
          <Input variant="outline" placeholder="Model" marginTop={'3'} />
          <Input variant="outline" placeholder="Transmission" marginTop={'3'} />
          <Input variant="outline" placeholder="Fuel Type" marginTop={'3'} />
          <Input variant="outline" placeholder="Price" marginTop={'3'} />

          <Button
            size="md"
            marginTop={'8'}
            variant="solid"
            width={'50%'}
            colorScheme={'green'}>
            Save
          </Button>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}
