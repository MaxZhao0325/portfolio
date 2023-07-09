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
  <Layout title="Auto-Vehicle">
    <Container>
      <Title>
        Autonomous Vehicle Design <Badge>2022</Badge>
      </Title>
      <P>
        We designed autonomous driving algorithms with ROS, demonstrating
        concepts like SLAM and AMCL Particle Filter to visualize maps and
        improve performance, winning 1st place in the final competition.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>ROS, Python</span>
        </ListItem>
        <ListItem>
          <Meta>Algorithms</Meta>
          <span>
            PID Control, Follow the Wall, Follow the Gap, Race Line Design
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

      <WorkImage src="/images/works/auto_veh.png" alt="Inkdrop" />
      <WorkImage src="/images/works/auto_veh_2.png" alt="Inkdrop" />
      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/A3WFHz7VTs4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from "../../components/chakra";
