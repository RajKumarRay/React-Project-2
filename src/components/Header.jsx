import React from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        position={'fixed'}
        zIndex={'overlay'}
        padding={'0'}
        width={'10'}
        height={'10'}
        top={'4'}
        left={'4'}
        borderRadius={'full'}
        colorScheme={'purple'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerCloseButton />

          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              {/* by default alignITems in VStak and Hstack center hote hai and justifyContent bhi center hota hai */}
              <Button
                onClick={onClose} // jaise hi button pe click ho. tab ye drawer hat jaye aur naya page khul jaye
                variant={'ghost'} // ye mera border color type hai
                colorScheme={'purple'}
              >
                <Link to={'/'}>Home</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button
                onClick={onClose}
                variant={'ghost'}
                colorScheme={'purple'}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme={'purple'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button
                onClick={onClose}
                colorScheme={'purple'}
                variant={'outline'}
              >
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
