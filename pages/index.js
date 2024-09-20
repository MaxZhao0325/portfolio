import NextLink from "next/link";
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Image,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { GridItem } from "../components/grid-item";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

export default function Page() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I am a full-stack developer!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hanzhang Zhao
          </Heading>
          <p>Software development / LLM / AI Application</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/Hanzhang_Head.jpeg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Intro
        </Heading>
        <Paragraph>
          I am a passionate software engineer currently pursuing an M.S. in
          Computational Data Science at Carnegie Mellon University. With a
          strong foundation in Computer Science and Mathematics from the
          University of Virginia, I have gained practical experience through
          internships at Philips and RevArt, where I developed robust software
          solutions ranging from real-time log display tools to social media
          management platforms. I thrive in agile environments, enjoy tackling
          complex challenges, and am dedicated to building impactful, efficient,
          and ethical software solutions. My expertise spans various
          technologies, including React.js, Node.js, .NET, Django, Spring,
          Kafka, and Docker.
          {/* The product that I'm most proud of is called{" "}
          <Link href="/works/classify">Classify</Link>. */}
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
          <BioYear>2017</BioYear>
          Complete the Middle School Diploma at Affiliated High School of Peking
          University
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Complete the High School Diploma at The High School Affiliated to
          Renmin University of China
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Complete the Undergraduate Degree of Computer Science and Mathematics
          at University of Virginia
        </BioSection>
        <BioSection>
          <BioYear>2026</BioYear>
          Complete the Master Degree of Computational Data Science at Carnegie
          Mellon University (in progress)
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
          Popular Music (Eason Chan, David Tao)
        </BioSection>
        <BioSection>
          <BioYear>Sports</BioYear>
          Basketball, Badminton, Pingpang, Snowboarding
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Social Media
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/MaxZhao0325" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @MaxZhao0325
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/hanzhangzhao/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @hanzhangzhao
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
}

export { getServerSideProps } from "../components/chakra";
