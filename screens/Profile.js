import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  NativeBaseProvider,
  VStack,
  Center,
  Avatar,
  Heading,
  HStack,
  Text,
} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Profile() {
  return (
    <NativeBaseProvider>
      <VStack flex={1} bg={'#ffffff'} alignItems="center">
        <Center space={2} alignItems="center">
          <Avatar
            bg="lightBlue.400"
            source={{
              uri: 'https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
            }}
            size="2xl"
            marginTop={10}>
            IMG
            <Avatar.Badge bg="green.500" />
          </Avatar>
        </Center>

        <Center marginTop={5} alignItems="center">
          <Heading>Kasun Umesh</Heading>
        </Center>

        <HStack
          marginTop={10}
          bg={'#ffffff'}
          width={'90%'}
          rounded="xl"
          alignContent="center"
          alignItems="center"
          shadow={'9'}>
          <Ionicons
            name="person-circle"
            size={35}
            style={{margin: 5}}
            color="#2c3e50"
          />
          <Text fontSize={20}>W. A. Kasun Umesh</Text>
        </HStack>
        <HStack
          marginTop={3}
          bg={'#ffffff'}
          width={'90%'}
          rounded="xl"
          alignContent="center"
          alignItems="center"
          shadow={'9'}>
          <Ionicons name="mail" size={35} style={{margin: 5}} color="#2c3e50" />
          <Text fontSize={20}>Kasunumesh38@gmail.com</Text>
        </HStack>

        <HStack
          marginTop={3}
          bg={'#ffffff'}
          width={'90%'}
          rounded="xl"
          alignContent="center"
          alignItems="center"
          shadow={'9'}>
          <Ionicons
            name="ios-car-sport-sharp"
            size={35}
            style={{margin: 5}}
            color="#2c3e50"
          />
          <Text fontSize={20}>Total Car : 200</Text>
        </HStack>

        <TouchableOpacity style={{width: '100%', alignItems: 'center'}}>
          <HStack
            marginTop={5}
            bg={'#ffffff'}
            width={'90%'}
            rounded="xl"
            alignContent="center"
            alignItems="center"
            shadow={'9'}>
            <Ionicons
              name="pencil-sharp"
              size={30}
              style={{margin: 5, marginLeft: 90}}
              color="#304FFE"
            />
            <Text color={'#304FFE'} fontSize={20}>
              Edit Details
            </Text>
          </HStack>
        </TouchableOpacity>
      </VStack>
    </NativeBaseProvider>
  );
}
