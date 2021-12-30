
import { Box, Heading, Input, SimpleGrid, Spacer,  Tag, Image, Center, GridItem, Spinner, HStack, Stack } from "@chakra-ui/react";
import {  useState, useEffect } from "react";

import {Link} from "react-router-dom";


const StoreItem = ({title, price, image})=>{
    return <Box p={4} borderRadius='lg' borderWidth='1px' h={300}>
        <Center>
            <Image src={image} w={24} />
        </Center>
        
        <Heading mt={4} size={"md"} fontWeight={"normal"} noOfLines={2} >{title}</Heading>
        <Spacer/>
        
        <Tag mt={4}>${price}</Tag>
        
    </Box>
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
                <Input onChange={e=>{
                    let f = items.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()));
                    setFiltereditems(f);
                }} placeholder="Search" mt={4}/>
                <Box borderRadius='lg' borderWidth='1px' mt={4}>
                    <Center>
                        <Heading>Categories</Heading>
                    </Center>
                    <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
                        
                            {cate.map(item => {
                                return <GridItem key={item}>
                                        <Center>
                                                <Stack>
                                                    <HStack>
                                                        <Tag size={"lg"}>
                                                            <Link to={'#'}>
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

                <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
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