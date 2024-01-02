function getGenerationsData() {
  const generations = [
    {
      title: 'Generation Alpha',
      minYear: 2013,
      maxYear: 2024,
      famousExamples: false,
    },
    {
      title: 'Generation Z',
      minYear: 1997,
      maxYear: 2012,
      famousExamples: [
        {
          name: 'MrBeast',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        },
        {
          name: 'Greta Thunberg',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        }
      ]
    },
    {
      title: 'Millenials (Generation Y)',
      minYear: 1981,
      maxYear: 1996,
      famousExamples: [
        {
          name: 'Taylor Swift',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        },
        {
          name: 'Mark Zuckerberg',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        }
      ]
    },
    {
      title: 'Generation X',
      minYear: 1965,
      maxYear: 1980,
      famousExamples: [
        {
          name: 'Jennifer Lopez',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        },
        {
          name: 'Elon Musk',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        }
      ]
    },
    {
      title: 'Baby Boomers (sometimes shortened to boomers)',
      minYear: 1946,
      maxYear: 1964,
      famousExamples: [',', ''],
      famousExamples: [
        {
          name: 'Arnold Schwarzenegger',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        },
        {
          name: 'Oprah Winfrey',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        }
      ]
    },
    {
      title: 'The Silent Generation',
      minYear: 1928,
      maxYear: 1945,
      famousExamples: [
        {
          name: 'Jane Fonda',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        },
        {
          name: 'Morgan Freeman',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        }
      ]
    },
    {
      title: 'The Greatest Generation',
      minYear: 1901,
      maxYear: 1927,
      famousExamples: [
        {
          name: 'Greta Garbo',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        },
        {
          name: 'Alan Watts',
          birthYear: 'XXXX',
          wikiLink: 'TODO Insert real wiki link here',
        }
      ]
    },
  ].sort((a, b) => a.minYear - b.minYear);

  // TODO fix in jsx component also, to handle objects
  // previously famousExamples: boolean | string[]
  // now famousExamples: boolean | celebrityObject[]

  const lowestMinYear = generations[0].minYear;
  const endIndex = generations.length - 1;
  const highestMaxYear = generations[endIndex].maxYear;

  return {
    lowestMinYear,
    highestMaxYear,
    generations,
  };
}

export { getGenerationsData };
