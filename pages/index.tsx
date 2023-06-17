import { NextPage } from 'next';
import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import { ServiceLayout } from '@/components/service_layout';
import { GoogleLoginButton } from '@/components/google_login_button';

// eslint-disable-next-line react/function-component-definition
const IndexPage: NextPage = () => (
  <ServiceLayout title="test">
    <Box maxW="md" mx="auto">
      <img src="/main_logo.svg" alt="메인 로고" />
      <Flex justify="center">
        <Heading>#BlahBlah</Heading>
      </Flex>
    </Box>
    <Center mt="20">
      <GoogleLoginButton />
    </Center>
  </ServiceLayout>
);
export default IndexPage;
