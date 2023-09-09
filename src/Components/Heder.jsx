import React from 'react'
import {BiMenuAltLeft} from "react-icons/bi"
import { Link } from 'react-router-dom'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Button, useDisclosure, VStack, HStack
  } from '@chakra-ui/react'

const Heder = () => {
    const {isOpen,onClose,onOpen} =useDisclosure()

  return (
    <>
    <Button 
    zIndex={"overlay"}
    pos={"fixed"}
    left={"4"}
    top={"4"}
    p={"0"}
    w={'10'}
    h={'10'}
    colorScheme='purple'
    borderRadius={"full"}
    onClick={onOpen}> <BiMenuAltLeft size={"30"}
     /> </Button>

    <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
        <DrawerOverlay />

       <DrawerContent>
        <DrawerCloseButton/>
        <DrawerHeader>Video Pathsala</DrawerHeader>
        <DrawerBody>
            <VStack alignItems={"flex-start"}>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={"/"}>Home</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={"/Videos"}>Videos</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={"/Videos?Category=free"}>Free Content</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={"/Upload"}>Upload</Link>
                </Button>
            </VStack>

            <HStack pos={"absolute"} bottom={"8"} left={"0"} w={"full"} justifyContent={"space-evenly"}>
                <Button onClick={onClose} colorScheme='purple'>
                    <Link to={"/login"}>Login</Link>
                </Button>
                <Button onClick={onClose} variant={"ghost"} colorScheme='purple'>
                    <Link to={"signUp"}>Sign Up</Link>
                    </Button>
            </HStack>
        </DrawerBody>
        </DrawerContent> 


    </Drawer>
    
    </>

  )
}

export default Heder