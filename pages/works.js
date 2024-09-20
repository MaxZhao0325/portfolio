import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbClassify from "../public/images/works/classify.png";
import thumbDashboard from "../public/images/works/research_dashboard.png";
import thumbArtSocial from "../public/images/works/art_social.png";
import thumbAutoVeh from "../public/images/works/auto_veh.png";
import thumbASCI from "../public/images/works/asci.png";
import thumbGradingTool from "../public/images/works/grading_tool.png";
import thumbPH from "../public/images/works/ph1.png";
import thumbJobHacker from "../public/images/works/jobhacker.png";

const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="art_social"
            title="Art-Social"
            thumbnail={thumbArtSocial}
          >
            A social media posts scheduler and auto commenting tool with ChatGPT
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="research_dashboard"
            title="Research Dashboard"
            thumbnail={thumbDashboard}
          >
            A research dashboard for recording patients' emotions and give
            proper suggestions
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="asci-uva" title="ASCI-UVA" thumbnail={thumbASCI}>
            An AI-based system that improved TA-student interactions and
            optimized peer tutoring
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.1}>
          <WorkGridItem
            id="grading_tool"
            title="GradingTool-UVA"
            thumbnail={thumbGradingTool}
          >
            An innovative grading system that allows efficient grading for all
            kinds of document
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="jobhacker"
            title="Job Hacker"
            thumbnail={thumbJobHacker}
          >
            A job aggregation tool to collect job posts from online resources
          </WorkGridItem>
        </Section>

        <Section delay={0.4}>
          <WorkGridItem id="ph" title="Pleasure House" thumbnail={thumbPH}>
            Intimate companion mobile/web app to fulfill physical and emotional
            needs
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="classify"
            title="Classify"
            thumbnail={thumbClassify}
          >
            A better course searching and scheduling app for UVA students
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem
            id="auto_veh"
            title="Autonomous Vehicle Design"
            thumbnail={thumbAutoVeh}
          >
            F1/10 Autonomous Racing
          </WorkGridItem>
        </Section>

        {/* <Section delay={0.3}>
          <WorkGridItem
            id="research_dashboard"
            title="Research Dashboard"
            thumbnail={thumbDashboard}
          >
            A research dashboard for recording patients' emotions and give
            proper suggestions
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="classify"
            title="Classify"
            thumbnail={thumbClassify}
          >
            A better course searching and scheduling app for UVA students
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>
    </Container>
  );
};

export default Works;
