import { View, } from 'react-native'
import React from 'react'
import { NativeBaseProvider, VStack, Image, Center, Heading, Text, Input, Button, Link } from "native-base";

export default function Login() {

  

  return (
    <NativeBaseProvider>
      
      <VStack  >
        
        
        
        <Center bg={"#263238"} h={"300px"}>
        
        <Image source={require("../assets/LoginCar.png")}  width={"100%"} height={"400px"} marginTop={"20"}/>

        <Text position={"absolute"} color={"#ffffff"} fontSize={"6xl"} bold top={"1"} left={"5"} >Car Sell</Text>

        </Center>

        <Center bg={"#ffffff"} h={"500px"} marginTop={"-4"} roundedTopRight={"70px"}  >
          <Heading position={"absolute"} color={"#2c3e50"} top={"5"} fontSize={"4xl"}  >REGISTER</Heading>
          <Text position={"absolute"} color={"#34495e"} top={"59"} fontSize={"md"}  >Create New Account</Text>

          <Input w={"85%"} top={"-10"} placeholder="First Name" marginTop={"10"} />
          <Input w={"85%"} marginTop={"1"} color={"black"} outlineColor={"blue"} placeholder="Last Name" />
          <Input w={"85%"} placeholder="Email" marginTop={"3"} />
          <Input w={"85%"} placeholder="Password" marginTop={"3"} />

          <Button bottom={"-10"} marginTop={"3"} size="md" colorScheme="green" w={"50%"}>
            Sign In
          </Button>

          <Link isExternal _text={{color: "blue.900"}} marginTop={"4"} >Back</Link>
          
        </Center>

        

      </VStack>
   
    </NativeBaseProvider>
  )
}
