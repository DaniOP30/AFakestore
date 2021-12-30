import { Box, Heading, SimpleGrid, Image, Center, GridItem, Text} from "@chakra-ui/react";
import { useParams,Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";


const Header = ({title})=> <Box p={4}>
    <Heading>{title}</Heading>
</Box>


const CategoryItem=({image, title, price})=> {
    return (
        <Box p={4} borderRadius='lg' borderWidth='1px' h={"full"}>
            <SimpleGrid columns={1}>
                <GridItem mt={10}>
                    <Center pb={20}>
                        <Image src={image} w={150} />
                    </Center>
                </GridItem>          
                <GridItem>
                    <Heading size='md' mt={4} fontWeight={"regular"} noOfLines={2} >{title}</Heading>
                    
                    <Text size={'lg'} w={{base:"full", md: 40}} fontSize={{base: 20, md: 24}} d={{base: "flex"}} fontWeight={"bold"} justifyContent={{base:"center", md: "left"}} colorScheme={"white"} color='black'  mt={4}>${price}</Text>

                </GridItem>
            </SimpleGrid>
        </Box>
    );
}






function Categories(){

    const [category, setcategory] = useState([]);

    const {item} = useParams();

    

    useEffect( ()=>{
        (async function() {
            try {
                await axios.get(`https://fakestoreapi.com/products/category/${item}`).then(({data})=>{
                    setcategory(data);
                });
            } catch (e) {
                console.error(e);
            }
        })();
    },);
    

    return (
        
    
    <Box>
        <Box p={4}>



            <Center mt={4}>
                <Header title={item}></Header>
            </Center>
            
            <SimpleGrid columns={{base: 1, md: 4}} spacing={4} mt={4} p={2}>            
                        {category.map(item => {
                            return <GridItem key={item.id}>
                                <Link to={`/product/${item.id}`}>
                                    <CategoryItem  {...item}  />
                                </Link>
                                </GridItem> 
                        })}
            </SimpleGrid>
        </Box>
        
    </Box>

        
        
        
    );
}

export default Categories;
