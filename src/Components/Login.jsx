import { Container, Heading,Text, Input, VStack, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Container minH={"container.xl"} p={"16"}>

      <form >
        <VStack
        w={"90"}
        spacing={"8"}
        alignItems={"stretch"}
        m={"auto"}
        my={"16"}>
          <Heading>Welcome Back </Heading>
          <Input required  focusBorderColor='purple.500' placeholder='email' type={"email"}/>
          <Input required  focusBorderColor='purple.500' placeholder='password' type={"password"}/>
          <Button variant={"ghost"} alignSelf={"flex-end"}>
            <Link to={"/forgetPassword"}>Forget Password</Link>
          </Button>

          <Button colorScheme={"purple"}type='submit'>Login</Button>

          <Text textAlign={"right"}>
            New User? {" "}
            <Link to={"/signUp"}>SignUp</Link>
          </Text>
        </VStack>
      </form>


    </Container>
  )
}

export default Login