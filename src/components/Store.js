
import { Box, Button, Flex, Heading, Input, Spacer, Stack, Tag } from "@chakra-ui/react";

const StoreItem = ({title, price})=>{
    return <Box p={4} borderRadius='lg' borderWidth='1px'>
        <Flex alignItems={'center'}>
            <Heading size={"md"}>{title}</Heading>
            <Spacer/>
            <Tag>${price}</Tag>
        </Flex>
    </Box>
}

function Store({items}){
    return <Box p={4}>
            <Stack>
                {items.map(item => {
                    return <StoreItem title={item.title} price={item.price} />
                })}
            </Stack>
            <Input mt={10} placeholder="Item name" />
            <Button mt={2}>Add Item</Button>
        </Box>
     
}


export default Store;