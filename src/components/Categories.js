import { Box, Heading, SimpleGrid, Spacer,  Tag, Image, Center, GridItem} from "@chakra-ui/react";
import { useParams,Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";


const Header = ({title})=> <Box p={4} shadow={'md'}>
    <Heading>{title}</Heading>
</Box>


const CategoryItem=({image, title, price})=> {
    return <Box p={4} borderRadius='lg' borderWidth='1px' h={300}>
        <Center>
            <Image src={image} w={24} />
        </Center>
        
        <Heading mt={4} size={"md"} fontWeight={"normal"} noOfLines={2} >{title}</Heading>
        <Spacer/>
        
        <Tag mt={4}>${price}</Tag>
        
    </Box>
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
            
            <SimpleGrid columns={4} spacing={4} mt={4} p={2}>            
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
