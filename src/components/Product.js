import { Box, Button, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text, Tag} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({title})=> <Box>
    <Heading size='2xl'>{title}</Heading>
</Box>


function Product(){

    const [product, setproduct] = useState([])

    const {id} = useParams();

    useEffect( ()=>{
        (async function() {
            try {
                await axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=>{
                    setproduct(data);
                });
            } catch (e) {
                console.error(e);
            }
        })();
      },);

    return <Box>
        
        <Box p={8} d={'flex'} alignItems={'center '}>
            
            <Box mt={10} ml={4}>
                <SimpleGrid spacing={4} columns={{base: 1, md: 5}}>
                    <GridItem ml={10} colSpan={2}>
                        <Image w={440} src={product.image}></Image>
                    </GridItem>
                    <GridItem mt={4} colSpan={3}>
                        <Stack spacing={4}>
                            <Header  title={product.title}></Header>
                            <Box>
                                <Tag p={2} colorScheme="brand" color='brand.white' mt={2}>{product.category}</Tag>
                            </Box>
                            <Box fontSize={'lg'}>
                                <Text >{product.description}</Text>
                            </Box>
                            <Heading>Price: ${product.price}</Heading>
                            <HStack>
                                <Button p={8} w={"xs"} size={"sm"} colorScheme={'purple'}>Buy Now</Button>
                                <Button p={8} w={"xs"} size={"sm"}>Add To Cart</Button>
                            </HStack>
                        </Stack>
                    </GridItem>
                </SimpleGrid>
            </Box>
        </Box>
    </Box>;
}

export default Product;

/*async function eliminar() {
    await axios.delete(`https://fakestoreapi.com/products/${id}`).then(response => 
    console.log(response));
}*/