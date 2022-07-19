import { Box, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import {BiSearch} from 'react-icons/bi';


export const SearchBar = (): JSX.Element => {
  return (
    <Box w={"50%"}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
          children={<BiSearch color='gray.300' />}
        />
        <Input type='text' placeholder='What are you looking for?' />
      </InputGroup>
    </Box>
  );
};
