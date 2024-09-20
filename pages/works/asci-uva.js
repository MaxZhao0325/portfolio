import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => (
  <Layout title="ASCI-UVA">
    <Container>
      <Title>
        ASCI-UVA <Badge>2023-</Badge>
      </Title>
      <P>
        In my time with ASCI at UVA, I've been able to make a real impact on how
        personalized learning happens in big classrooms by building AI tools
        that provide automated help and feedback. One of my key projects was
        creating a system that pairs TAs and students using machine learning,
        which really smoothed out the process of managing questions and bumped
        up our productivity by 30% during office hours. And I'm not stopping
        there – I'm currently working on a new tool that'll measure how engaged
        students are by using data from Canvas and Gradescope. The goal? To make
        sure students get the most out of their peer tutoring sessions.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          {/* <Link href="https://researchdashboard.herokuapp.com/dataviewer/tracking/">
            https://researchdashboard.herokuapp.com/dataviewer/tracking/{" "}
            <ExternalLinkIcon mx="2px" />
          </Link> */}
          For Internal Use Only
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web Application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ReactJS, PHP, Python, Docker, Selenium, PostgreSQL</span>
        </ListItem>
        {/* <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
              How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
              $5/mo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem> */}
      </List>

      <WorkImage src="/images/works/asci_2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/asci_3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/asci_4.png" alt="Inkdrop" />
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
