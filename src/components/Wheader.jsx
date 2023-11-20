import React from 'react'
import { Link } from "react-router-dom";
import { Card,  CardBody, CardFooter } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'

function Wheader () {
  return (
    <>
    <header className='header'>
        <div>
            <h1>
                <Link to="/logo" className='logo'>
                    Star Shop
                </Link>
            </h1>
        </div>
        <div className="header-links">
            <ul>
                <li>
                   <Link to="/">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                   <Link to="/login">Login</Link>
                </li>
            </ul>
            <ul>
                <li>
                   <Link to="/cart" className='cart'>
                   <i class="fa-regular fa-square"></i>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                   <Link to="/cart" className='cart'>
                   <i class="fa-regular fa-heart"></i>
                    </Link>
                </li>
            </ul>
            <ul>
                <li>
                   <Link to="/cart" className='cart'>
                    <i class="fas fa-shopping-cart "/>
                    </Link>
                </li>
            </ul>
        </div>
    </header>
    <section className='nahid'>
      
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://t4.ftcdn.net/jpg/05/61/12/87/240_F_561128720_QvZgOz0DkdfwA6UxReiIEwL4nYw88NEP.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Star</Heading>
      <Text fontSize='2xl'>
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button 
      id='starbtn' variant='ghost' colorScheme='black'>
        Add to cart
      </Button>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://t4.ftcdn.net/jpg/05/61/12/87/240_F_561128720_QvZgOz0DkdfwA6UxReiIEwL4nYw88NEP.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Star</Heading>
      <Text fontSize='2xl'>
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button 
      id='starbtn' variant='ghost' colorScheme='black'>
        Add to cart
      </Button>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://t4.ftcdn.net/jpg/05/61/12/87/240_F_561128720_QvZgOz0DkdfwA6UxReiIEwL4nYw88NEP.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Star</Heading>
      <Text fontSize='2xl'>
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button 
      id='starbtn' variant='ghost' colorScheme='black'>
        Add to cart
      </Button>
  </CardFooter>
</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://t4.ftcdn.net/jpg/05/61/12/87/240_F_561128720_QvZgOz0DkdfwA6UxReiIEwL4nYw88NEP.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Star</Heading>
      <Text fontSize='2xl'>
      </Text>
    </Stack>
  </CardBody>
  <CardFooter>
      <Button 
      id='starbtn' variant='ghost' colorScheme='black'>
        Add to cart
      </Button>
  </CardFooter>
</Card>


    </section>
    </>
  )
}

export default Wheader