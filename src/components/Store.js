
import { Box, Button, Flex, Heading, Input, SimpleGrid, Spacer, Stack, Tag, Image, Center, GridItem, Spinner } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import Header from "./Header";
import {Link} from "react-router-dom";


const StoreItem = ({title, price, image})=>{
    return <Box p={4} borderRadius='lg' borderWidth='1px'>
        <Center>
            <Image src={image} w={24} />
        </Center>
        
        <Heading mt={4} size={"md"} fontWeight={"normal"} noOfLines={2} >{title}</Heading>
        <Spacer/>
        
        <Tag mt={4}>${price}</Tag>
        
    </Box>
};

function Store({items, loading}){
    const [filteredItems, setFiltereditems] = useState(items)

    useEffect(()=>{
        setFiltereditems(items);
    },[items])

    return(
        <Box>
            <Header title={"Fake Store"}/>
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