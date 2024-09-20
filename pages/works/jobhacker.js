import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
  Box,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="Pleasure House">
    <Container>
      <Title>
        Job-Hacker <Badge>2024-</Badge>
      </Title>
      <P>
        "Job Hacker" is a personal project that leverages a microservices
        architecture to create a robust job aggregation platform. Built using
        Spring Boot and Spring Cloud, the platform efficiently handles high
        traffic and ensures seamless job search and retrieval through the
        integration of Kafka for event-driven communication and Elasticsearch
        for optimized querying. With a focus on resilience and scalability, the
        project achieves near-perfect uptime and enhances data processing
        efficiency. The use of Docker for containerization and Spring Cloud
        Config Server for streamlined configuration management ensures rapid
        deployment and consistency across environments.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://github.com/MaxZhao0325/JobHacker/">
            https://github.com/MaxZhao0325/JobHacker/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application / Microservices</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Spring Boot, Spring Cloud, Kafka, Elasticsearch, Resilience4j,
            Redis, Docker, Maven, Java
          </span>
        </ListItem>
        {/* <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem> */}
      </List>

      <WorkImage src="/images/works/jobhacker1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/jobhacker2.png" alt="Inkdrop" />

      {/* <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/-qBavwqc_mY"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio> */}
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
