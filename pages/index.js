import NextLink from 'next/link'
import {
  Button,
  Box, 
  Container, 
  Heading, 
  Image, 
  useColorModeValue,
  Link,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'


export default function Page() {
  return(
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I am a full-stack developer!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hanzhang Zhao
          </Heading>
          <p>Human robots / Developer / AI</p>
        </Box>
        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
          <Image 
          borderColor="whiteAlpha.800" 
          borderWidth={2} 
          borderStyle="solid" 
          maxWidth="100px" 
          display="inline-block" 
          borderRadius="full"
          src="/images/profile.jpg"
          alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        My name is Hanzhang Zhao, a third year student in University of Virginia. 
        I am now studying computer science in the engineering school of UVA, and I hope to become a software engineer in the future. 
        I am really passionate about web development and I have several experiences in web development using Django framework and basic programming languages like html, css, and javascript. 
        Besides web development, I am also interested in robotics, and artificial intelligence. 
        And I am now trying to learn more skills around these spheres. The product that I'm most proud of is called{' '}        
          <Link href="/works/classify">Classify</Link>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2002</BioYear>
          Born in Beijing (北京), China.
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Complete the Undergraduate Degree of Computer Science and Mathematics at University of Virginia (in process)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I like
        </Heading>
        <BioSection>
          <BioYear>Video Games</BioYear>
          League of Legend, Volorant
        </BioSection>
        <BioSection>
          <BioYear>Music</BioYear>
          Popular Music
        </BioSection>
        <BioSection>
          <BioYear>Sports</BioYear>
          Basketball, Badminton, Pingpang
        </BioSection>
        
      </Section>
    </Container>
  )
}