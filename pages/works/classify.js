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
  <Layout title="Classify">
    <Container>
      <Title>
        Classify <Badge>2022-</Badge>
      </Title>
      <P>
        A web application enhancing course searching and selection experience
        for UVA students. This app allows users to add classes to shopping cart,
        create and share schedule with friends. It also provides features such
        as automated course status tracking to help students get in popular
        courses.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://classify.herokuapp.com/">
            https://classify.herokuapp.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Django, PostgreSQL, Heroku</span>
        </ListItem>
        {/* <ListItem>
              <Meta>Blogpost</Meta>
              <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
                How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
                $5/mo <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem> */}
      </List>

      <WorkImage src="/images/works/classify.png" alt="Inkdrop" />
      <WorkImage src="/images/works/classify_2.png" alt="Inkdrop" />
      <WorkImage src="/images/works/classify_3.png" alt="Inkdrop" />
      <WorkImage src="/images/works/classify_4.png" alt="Inkdrop" />
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
