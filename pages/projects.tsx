import {
  Box,
  Heading,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import AppBlock from "../components/AppBlock";
import PageHeader from "../components/PageHeader";
import ProjectBlockLink from "../components/ProjectBlockLink";
import categories from "../data/projects/categories.json";
import projects from "../data/projects/projects.json";
import { Project, ProjectCategory } from "../types";
import ProjectInlineLink from "../components/ProjectInlineLink";
import { NextSeo } from "next-seo";

export type ProjectsPageProps = {
  projects: Project[];
  categories: ProjectCategory[];
};

const ProjectsPage = ({ projects, categories }: ProjectsPageProps) => {
  return (
    <>
      <NextSeo
        title="gbms | Проекты"
        description="Список всех моих проектов. Список всех проектов с моим участием."
      />

      <VStack spacing={12} divider={<StackDivider />}>
        <PageHeader duration={0.6}>
          <Heading textAlign="center" as="h2" mb={[0, 2]}>
            Проекты
          </Heading>
          <Text align="center">Список всех проектов с моим участием</Text>
        </PageHeader>

        {categories.map((category) => (
          <Box key={category.title} width="100%">
            <AppBlock delay={0.05}>
              <Box mb={8}>
                <Heading as="h3" mb={2} textAlign="left">
                  {category.title}
                </Heading>
                <Text textAlign="left">{category.description}</Text>
              </Box>

              <SimpleGrid
                columns={{ sm: 1, md: 2 }}
                justifyContent={["space-around", "space-between"]}
                spacingY={["2rem", "3rem"]}
                spacingX={category.format === "block" ? 0 : 5}
              >
                {projects
                  .filter((p) => p.categoryId === category.id)
                  .map((project) =>
                    category.format === "block" ? (
                      <ProjectBlockLink project={project} key={project.title} />
                    ) : (
                      <ProjectInlineLink
                        project={project}
                        key={project.title}
                      />
                    )
                  )}
              </SimpleGrid>
            </AppBlock>
          </Box>
        ))}
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      projects: projects.data,
      categories: categories.data,
    },
  };
}

export default ProjectsPage;
