import { HStack, Heading, Input, Text, Button, Stack, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return (
    <>
    <Stack p={"10"} minH={"30vh"} bgColor={"black"} direction={["column","row"]}>
        <VStack
        w={"full"}
        justifyContent={"center"}
        alignItems={["center","stretch"]}>
            <Text textTransform={"uppercase"} color={'white'} marginTop={"5px"}>
                Subscribe for new updates
            </Text>
            <HStack>
                <Input color={"white"} border={"none"} placeholder={'Enter your email'} outline={"none"} justifySelf={"stretch"} />
                <Button variant='ghost' bgColor={"purple"}><AiOutlineSend color={"white"} /></Button>
            </HStack>

        </VStack>

        <VStack w={"full"} borderLeft={["none","2px solid white"]}
        borderRight={["none","2px solid white"]} justifyContent={"center"} m={["5","0"]}>
            <Heading  color={'white'} textTransform={'uppercase'}>Video Pathsala</Heading>
            <Text  color={'white'} textTransform={"capitalize"}>all right reserved</Text>
        </VStack>
        <VStack color={"white"} w={"full"} justifyContent={"center"} marginBottom={["3","0"]}>
            <Text borderBottom={"2px solid white"} textTransform={"uppercase"}>Social Media</Text>
            <a href="https://www.youtube.com" target={"blank"}> YouTube</a>
            <a  href="https://www.instagram.com" target={"blank"}>Instagram</a>
            <a  href="https://www.github.com" target={"blank"}>Github</a>
        </VStack>

    </Stack>
    </>
  )
}

export default Footer