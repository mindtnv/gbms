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

const BioPage: NextPage = () => {
  const characteristics = [
    "адаптивный",
    "амбициозный",
    "бдительный",
    "безбоязненный",
    "бойкий",
    "вдохновенный",
    "вдумчивый",
    "великодушный",
    "внимательный",
    "гениальный",
    "гибкий",
    "дивный",
    "добрый",
    "догадливый",
    "душевный",
    "естественный",
    "жизнелюбивый",
    "забавный",
    "задорный",
    "идейный",
    "импозантный",
    "искренний",
    "конкурентоспособный",
    "конструктивный",
    "коммуникабельный",
    "корректный",
    "любознательный",
    "любвеобильный",
    "непринужденный",
    "одухотворенный",
    "оптимистичный",
    "правдивый",
    "притягательный",
    "разносторонний",
    "сообразительный",
    "талантливый",
    "творческий",
    "уравновешенный",
    "харизматичный",
    "чистоплотный",
    "чувственный",
    "эмоциональный",
    "энергичный",
    "эрудированный",
    "яркий",
    "красивый",
    "скромный",
    "умный",
    "сильный",
    "великолепный",
  ]
    .map((x) => x.toLowerCase())
    .sort();

  const headers: { [index: string]: Array<string> } = {};

  characteristics.forEach((c) => {
    if (!(c[0] in headers)) headers[c[0]] = [];
    headers[c[0]].push(c);
  });

  return (
    <>
      <Head>
        <title>gbms | Биография</title>
      </Head>

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
            {Object.keys(headers).map((h) => (
              <GridItem key={h}>
                <Heading as="h4" mb={4}>
                  {h.toUpperCase()}
                </Heading>
                <List>
                  {headers[h].map((c) => (
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

export default BioPage;
