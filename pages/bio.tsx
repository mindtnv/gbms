import { NextPage } from "next";
import Head from "next/head";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  List,
  ListItem,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import AppBlock from "../components/AppBlock";
import PageHeader from "../components/PageHeader";
import characteristicData from "../data/bio/characteristics.json";
import { NextSeo } from "next-seo";

export type BioPageProps = {
  characteristics: { [index: string]: Array<string> };
};

const BioPage: NextPage<BioPageProps> = ({ characteristics }: BioPageProps) => {
  return (
    <>
      <NextSeo
        title="gbms | Биография"
        description="Моя биография. Мои качества."
      />

      <VStack spacing={12} divider={<StackDivider />}>
        <PageHeader duration={0.6}>
          <Heading textAlign="center" as="h2" mb={[0, 2]}>
            Биография
          </Heading>
          <Text align="center">Полный список моих характеристик</Text>
        </PageHeader>

        <AppBlock delay={0.05}>
          <Box>
            <Heading as="h3" mb={[10, 14]}>
              О себе
            </Heading>
          </Box>
          <Grid
            templateColumns={["100%", "auto auto"]}
            justifyContent="space-between"
            rowGap={10}
          >
            {Object.keys(characteristics).map((h) => (
              <GridItem key={h}>
                <Heading as="h4" mb={4}>
                  {h.toUpperCase()}
                </Heading>
                <List>
                  {characteristics[h].map((c) => (
                    <ListItem key={c}>
                      <Text fontSize="xl">
                        {c[0].toUpperCase() + c.substring(1)}
                      </Text>
                    </ListItem>
                  ))}
                </List>
              </GridItem>
            ))}
          </Grid>
        </AppBlock>
      </VStack>
    </>
  );
};

export async function getStaticProps() {
  const characteristics = characteristicData.data
    .map((x) => x.toLowerCase())
    .sort();
  const result: { [index: string]: Array<string> } = {};

  characteristics.forEach((c) => {
    if (!(c[0] in result)) result[c[0]] = [];
    result[c[0]].push(c);
  });

  return {
    props: {
      characteristics: result,
    },
  };
}

export default BioPage;
