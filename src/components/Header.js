import {Box, Heading} from "@chakra-ui/react";

function Header({title}){
    return (
    <Box p={4} >
    <Heading textColor={'black'}>{title}</Heading>
    </Box>
    );
}

export default Header;