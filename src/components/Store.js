
import { Box, Heading, Input, SimpleGrid, Spacer,  Tag, Image, Center, GridItem, Spinner, HStack, Stack, Text } from "@chakra-ui/react";

import {  useState, useEffect } from "react";

import {Link} from "react-router-dom";


const StoreItem = ({title, price, image})=>{
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
                <Spacer/>
                <Text size={'lg'} w={{base:"full", md: 40}} fontSize={{base: 20, md: 24}} d={{base: "flex"}} fontWeight={"bold"} justifyContent={{base:"center", md: "left"}} colorScheme={"white"} color='black'  mt={4}>${price}</Text>
            </GridItem>
        </SimpleGrid>
    </Box>
    );
};

function Store({items, loading, cates}){
    const [filteredItems, setFiltereditems] = useState(items)

    const [cate, setcate] = useState(cates)
    useEffect(()=>{
        setFiltereditems(items);
    },[items])

    useEffect(()=>{
        setcate(cates);
    },[cates])

    return(
        <Box>
            {loading ? (
                <Center>
                    <Spinner mt={6}/> 
                </Center>
            ):
            
            
            <Box p={4}>
                

                <Box mt={4}>
                    <Center mt={5}>
                        <Heading>Categories</Heading>
                    </Center>

                    <SimpleGrid columns={{base: 1, md: 4}}  d={{base: 'block', md: 'flex'}} w={"full"} spacing={6} justifyContent={'center'} mt={4} p={{base: 0, md: 2}}  >
                        
                            {cate.map(item => {
                                return <GridItem mt={{base: 5 , md: 4}} key={item}>
                                        <Center>
                                                <Stack>
                                                    <HStack>
                                                        <Tag p={4} fontWeight={"bold"} w={{base: 52, md: "full"}} justifyContent={'center'} colorScheme="categoryColor" color='brand.white' size={"lg"}>
                                                            <Link to={`/categories/${item}`}>
                                                                    {item}
                                                            </Link>
                                                        </Tag>
                                                    </HStack>
                                                </Stack>
                                        </Center>
                                    </GridItem> 
                            })}
                    </SimpleGrid>
                </Box>
                <Input zIndex={0} onChange={e=>{
                    let f = items.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
                    setFiltereditems(f);
                }} placeholder="Search" mt={4}/>

                <SimpleGrid columns={{base: 1, md: 4}} spacing={4} mt={4} p={2}>
                    {filteredItems.map(item => {
                        return <GridItem key={item.id}>
                            <Link to={`/product/${item.id}`}>
                                <StoreItem  {...item}  />
                            </Link>
                            </GridItem> 
                    })}
                </SimpleGrid>
            </Box>
            }
        </Box>
    );
     
};


export default Store;