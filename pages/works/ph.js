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
        Pleasure-House <Badge>2024-</Badge>
      </Title>
      <P>
        Led the development of a serverless intimate companion mobile app,
        enhancing physical and emotional satisfaction for over 50 users. Key
        contributions included building a scalable user management system with
        GraphQL and Node.js, optimizing storage by integrating AWS S3 and
        MongoDB, and improving backend efficiency with AWS Lambda. Enhanced
        Bluetooth capabilities in the app using React Native for bidirectional
        communication with BLE devices, doubling service performance.
        Additionally, implemented AWS CloudWatch for real-time monitoring,
        significantly boosting the app's reliability.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://ph-web-app.vercel.app/">
            https://ph-web-app.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application / iOS / Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            GraphQL, Node.js, React.js, React Native, MongoDB, AWS, Agile
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

      <WorkImage src="/images/works/ph1.png" alt="Inkdrop" />
      <WorkImage src="/images/works/ph2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/ph3.png" alt="Inkdrop" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <img
          src="/images/works/ph4.png"
          alt="Inkdrop"
          style={{
            height: "400px",
            width: "auto",
            borderRadius: "8px",
          }}
        />
        <img
          src="/images/works/ph5.png"
          alt="Inkdrop"
          style={{
            height: "400px",
            width: "auto",
            borderRadius: "8px",
          }}
        />
        <img
          src="/images/works/ph6.png"
          alt="Inkdrop"
          style={{
            height: "400px",
            width: "auto",
            borderRadius: "8px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <img
          src="/images/works/ph7.png"
          alt="Inkdrop"
          style={{
            height: "400px",
            width: "auto",
            borderRadius: "8px",
          }}
        />
        <img
          src="/images/works/ph8.png"
          alt="Inkdrop"
          style={{
            height: "400px",
            width: "auto",
            borderRadius: "8px",
          }}
        />
        <img
          src="/images/works/ph9.png"
          alt="Inkdrop"
          style={{
            height: "400px",
            width: "auto",
            borderRadius: "8px",
          }}
        />
      </div>
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
