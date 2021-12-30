import { Box, Button, GridItem, Heading, HStack, Image, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const Header = ({title})=> <Box p={4} shadow={'md'}>
    <Heading>{title}</Heading>
</Box>


function Product(){

    const [product, setproduct] = useState([])

    const {id} = useParams();
    console.log(id)

    useEffect(async ()=>{
        await axios.get(`https://fakestoreapi.com/products/${id}`).then(({data})=>{
            setproduct(data);
        });
      }, []);

    return <Box>
        <Header title={product.title}></Header>
        <Box p={8} d={'flex'} alignItems={'center '}>
            
            <Box ml={4}>
                <SimpleGrid spacing={4} columns={{base: 1, md: 5}}>
                    <GridItem colSpan={2}>
                        <Image w={48} src={product.image}></Image>
                    </GridItem>
                    <GridItem colSpan={3}>
                        <Heading>Price: ${product.price}</Heading>
                        <Text>{product.description}</Text>
                        <HStack>
                            <Button w={"xs"} size={"sm"} colorScheme={'purple'}>Buy Now</Button>
                            <Button w={"xs"} size={"sm"}>Show carts</Button>
                        </HStack>
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