import { View, } from 'react-native'
import React from 'react'
import { NativeBaseProvider, VStack, Image, Center, Heading, Text, Input, Button } from "native-base";

export default function Login() {

  

  return (
    <NativeBaseProvider>
      
      <VStack  >
        
        
        
        <Center bg={"#263238"} h={"300px"}>
        
        <Image source={require("../assets/LoginCar.png")}  width={"100%"} height={"400px"} marginTop={"20"}/>

        <Text position={"absolute"} color={"#ffffff"} fontSize={"6xl"} bold top={"1"} left={"5"} >Car Sell</Text>

        </Center>

        <Center bg={"#ffffff"} h={"500px"} marginTop={"-4"} roundedTopRight={"70px"}  >
          <Heading position={"absolute"} color={"#2c3e50"} top={"10"} fontSize={"4xl"}  >WELCOME</Heading>
          <Text position={"absolute"} color={"#34495e"} top={"85"} fontSize={"2xl"} bold >Login</Text>

          <Input w={"85%"} top={"-20"} placeholder="User Name" />
          <Input w={"85%"} marginTop={"1"} color={"black"} outlineColor={"blue"} variant={"outline"} placeholder="Password" />

          <Button bottom={"-15"} marginTop={"6"} size="md" colorScheme="green" w={"50%"}>
            Sign In
          </Button>
          
        </Center>

        

      </VStack>
   
    </NativeBaseProvider>
  )
}
