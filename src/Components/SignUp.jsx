import { Container, Heading,Text, Input, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <Container minH={"container.xl"} p={"16"}>

      <form >
        <VStack
        w={"90"}
        spacing={"8"}
        alignItems={"stretch"}
        m={"auto"}
        my={"16"}>
          <Heading>Video Pathsala</Heading>
          <Input required  focusBorderColor='purple.500' placeholder='Name' type={"text"}/>
          <Input required  focusBorderColor='purple.500' placeholder='Email' type={"email"}/>
          <Input required  focusBorderColor='purple.500' placeholder='Password' type={"password"}/>
          <Input required  focusBorderColor='purple.500' placeholder='Confirm password' type={"password"}/>

          <Button colorScheme={"purple"}type='submit'>Login</Button>

          <Text textAlign={"right"}>
            If Alredy SignUp? {" "}
            <Link to={"/Login"}>Login</Link>
          </Text>
        </VStack>
      </form>


    </Container>
  )
}

export default SignUp