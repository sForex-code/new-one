import { Container, VStack, HStack,Input, Button, background} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineCloudUpload} from "react-icons/ai"

const Uplode = () => {
  return (
  <Container minW={"70%"} p={"16"} h={"100vh"}>
    <VStack color={"purple.300"} h={"full"} justifyContent={"center"}>
        <AiOutlineCloudUpload size={"20%"}/>
        <form>
        <HStack>
            <Input type='file' required css={{
              '&::file-selector-button':{
                border:"none",
                width:"calc(100%+36px)",
                height:"100%",
                marginLeft:"-18px",
                backgroundColor:"white",
                color:'purple'
              }}}/>
            <Button type='submit'>Uplode</Button>
        </HStack>
        </form>
    </VStack>

  </Container>
  )
}

export default Uplode