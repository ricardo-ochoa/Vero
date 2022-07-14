import React, {useState} from "react";
import {Stack, Button, Text, Image, Flex, Badge} from "@chakra-ui/react";

import {parseCurrency} from "../utils/currency";
import {Product} from "./types";

import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

interface Props {
  product: Product;
  onAdd: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({product, onAdd}) => {

    const [selectedImage, setSelectedImage] = React.useState<string>(null)
    
    return (

      <AnimateSharedLayout>
            <Stack  spacing={ 3 } key={ product.id } backgroundColor="gray.50"  borderRadius={ "xl" } p={"4"} border='1px' borderColor='gray.200'>

            <Image
            as={motion.img}
            cursor="pointer"
            layoutId={product.image}
            borderTopRadius="md" maxHeight={200} objectFit="cover"
            src={product.image} alt={product.title}
            onClick={() => setSelectedImage(product.image)}
            />

            <Stack>
            <Flex alignItems="flex-start" justifyContent="flex-start" mt={-33} ml={-3}>
            { product.stock === 1
            ? <Badge position='relative' fontSize='0.7em' colorScheme='red' marginLeft='1rem'> Stock: {product.stock} </Badge>
            : <Badge position='relative' fontSize='0.7em' colorScheme='orange' marginLeft='1rem'> Stock: {product.stock} </Badge>
            } 
            </Flex>
            </Stack>

            <Stack spacing={ 3 }>
            <Text>{product.title}</Text>    
            <Text color='purple' fontSize="sm" fontWeight="600"> {parseCurrency(product.price)} {"mxn"} </Text>
            </Stack>

            { product.stock === 0
            ? <Button isDisabled colorScheme="gray"
            leftIcon={<Image src="https://icongr.am/fontawesome/shopping-cart.svg?size=18&color=1a202c" alt='Lo quiero'/>}> Agregar </Button>
            : <Button onClick={() => onAdd(product)} colorScheme="primary" border='2px' borderColor='primary.600' 
            leftIcon={<Image src="https://icongr.am/fontawesome/shopping-cart.svg?size=18&color=ffffff" alt='Lo quiero'/>}> Agregar </Button>
            } 

            </Stack>


          <AnimatePresence>
            {selectedImage && (
              <Flex
              key="backdrop" 
              alignItems="center" 
              justifyContent="center"
              zIndex={9999}

              as={motion.div} 
              backgroundColor="rgba(0,0,0,0.7)"
              layoutId={selectedImage}
              left={0}
              position="fixed"
              top={0}
              width="100%"
              height="100%"
              onClick={() => setSelectedImage(null)}
              >
                <Image key="image" src={selectedImage} alt="Detalle de producto"
                borderRadius={"xl"}/>
              </Flex>
              )
            }
          </AnimatePresence>

      </AnimateSharedLayout>
    );
  };
  
  export default ProductCard;