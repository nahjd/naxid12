import React from 'react'
import Wheader from './Wheader'
import { ChakraProvider } from '@chakra-ui/react'

import { Router } from 'react-router-dom'
function Wishlist() {
  return (
    <>
  <ChakraProvider>
  <Wheader/>
  </ChakraProvider>
    </>
  )
}

export default Wishlist