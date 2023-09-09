import { Box,Container,Heading,Image, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpg"
import img4 from "../assets/4.jpg"
import img5 from "../assets/5.png"

const heading={
    pos:"absolute",
    left:"50%",
    top:"40%",
    p:"4",
    size:"2xl",
    textTransform:"uppercase",
    transform:"translate(-50%,50%)",
    borderRadius:"25px"

}

const Home = () => {
  return (
    <Box>
        <MyCarousel/>

        <Container maxW={'container.xl'}minH={"100vh"} p={"16"}>
             <Heading textTransform={"uppercase"} w={"fit-content"}
             borderBottom={"2px solid black"}
             py={"2"}
             margin={"auto"}>services</Heading>
             <Stack h={"full"}
             p={"4"}
             alignItems={"center"}
             direction={["column","row"]}>
                <Image src={img5} h={["40","400"]} filter={"hue-rotate(-130deg)"}/>
                <Text letterspacing={"widest"} lineHeight={"190%"} padding={["4","16"]}
                textAlign={"center"}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod expedita voluptatum dolores ab perferendis ut natus veritatis corrupti omnis. Quibusdam perferendis distinctio consequatur quo id, aliquam suscipit consequuntur odio nulla accusamus atque numquam vitae sint tempore, nobis doloremque quae neque dignissimos similique illo eveniet commodi. Dolores ut, aperiam voluptates laborum beatae eius quos ducimus eos adipisci ipsum odit dolorem quia sapiente culpa accusamus ea voluptatum error dolore et earum at aspernatur laboriosam necessitatibus? Asperiores delectus aspernatur accusantium fugit hic possimus eius veritatis explicabo placeat, velit vel pariatur, deserunt, nostrum error exercitationem quia necessitatibus nemo commodi voluptatibus dolorum consectetur. Optio, tempore?</Text>
             </Stack>


            
        </Container>

    </Box>
  )
}

const MyCarousel =()=>(
        <Carousel autoPlay 
        infiniteLoop
        interval={'2000'}
        showArrows={false}
        showStatus={false}
        showThumbs={false}>

            <Box  w={"full"} h={"100vh"}>
                <Image src={img1}/>
                <Heading bgColor={"blackAlpha.300"} color={"white"} {...heading}>the future of gaming</Heading>
            </Box>
            <Box  w={"full"} h={"100vh"}>
                <Image src={img2}/>
                <Heading bgColor={"whiteAlpha.900"} color={"black"} {...heading}> only gaming</Heading>
            </Box>
            <Box  w={"full"} h={"100vh"}>
                <Image src={img3}/>
                <Heading bgColor={"whiteAlpha.900"} color={"black"} {...heading}> console gaming</Heading>
            </Box>
            <Box  w={"full"} h={"100vh"}>
                <Image src={img4}/>
                <Heading bgColor={"whiteAlpha.900"} color={"black"} {...heading}> gaming night</Heading>
            </Box>

        </Carousel>
    )

export default Home