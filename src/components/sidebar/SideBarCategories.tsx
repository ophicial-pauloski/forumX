import React from 'react'
import { Box, Button, Text } from "@chakra-ui/react";
import categories from  './category.json';
import { MdAddCircle } from "react-icons/md";

export const SideBarCategories = () => {
  return (
    <Box mb={5}>
      <Box display={'flex'} alignItems='center'>
        <Button disabled size='sm' px={5} mt={2}>
          <MdAddCircle /> <Text ml={2}>Create Space</Text>
        </Button>
        <Text fontSize={'0.7rem'} fontWeight='bold' color='green' alignSelf={'center'} ml={1}>Coming soon</Text>
      </Box>
      {categories.map((category, index) => {
        return (
          <Box key={index}>
            <Button bg={"none"} size='sm' px={5} mt={2}>
              {category.name}
            </Button>
          </Box>
        );
      })}
    </Box>
  );
}
