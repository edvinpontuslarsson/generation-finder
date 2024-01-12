function getGenerationsData() {
  const generations = [
    {
      title: 'Generation Alpha',
      minYear: 2013,
      maxYear: 2024,
      famousExamples: [
        {
          name: 'ChatGPT',
          birthYear: '2022',
          wikiLink: 'https://en.wikipedia.org/wiki/ChatGPT',
          image: 'images/ChatGPT_logo.svg',
        },
      ],
    },
    {
      title: 'Generation Z',
      minYear: 1997,
      maxYear: 2012,
      famousExamples: [
        {
          name: 'MrBeast',
          birthYear: '1998',
          wikiLink: 'https://en.wikipedia.org/wiki/MrBeast',
          image: 'images/MrBeast_2023_(cropped).jpeg',
        },
        {
          name: 'Greta Thunberg',
          birthYear: '2003',
          wikiLink: 'https://en.wikipedia.org/wiki/Greta_Thunberg',
          image: 'images/Greta_Thunberg_in_Stckholm_(cropped_2).jpeg',
        },
      ],
    },
    {
      title: 'Millenials (Generation Y)',
      minYear: 1981,
      maxYear: 1996,
      famousExamples: [
        {
          name: 'Taylor Swift',
          birthYear: '1989',
          wikiLink: 'https://en.wikipedia.org/wiki/Taylor_Swift',
          image: 'images/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_(3).png',
        },
        {
          name: 'Mark Zuckerberg',
          birthYear: '1984',
          wikiLink: 'https://en.wikipedia.org/wiki/Mark_Zuckerberg',
          image: 'images/Mark_Zuckerberg_F8_2019_Keynote_(32830578717)_(cropped).jpeg',
        },
      ],
    },
    {
      title: 'Generation X',
      minYear: 1965,
      maxYear: 1980,
      famousExamples: [
        {
          name: 'Jennifer Lopez',
          birthYear: '1969',
          wikiLink: 'https://en.wikipedia.org/wiki/Jennifer_Lopez',
          image: 'images/210120-D-WD757-1975_(50860511978)_(cropped).jpeg',
        },
        {
          name: 'Elon Musk',
          birthYear: '1971',
          wikiLink: 'https://en.wikipedia.org/wiki/Elon_Musk',
          image: 'images/Elon_Musk_Colorado_2022_(cropped2).jpeg',
        },
      ],
    },
    {
      title: 'Baby Boomers (sometimes shortened to boomers)',
      minYear: 1946,
      maxYear: 1964,
      famousExamples: [
        {
          name: 'Arnold Schwarzenegger',
          birthYear: '1947',
          wikiLink: 'https://en.wikipedia.org/wiki/Arnold_Schwarzenegger',
          image: 'images/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpeg',
        },
        {
          name: 'Oprah Winfrey',
          birthYear: '1954',
          wikiLink: 'https://en.wikipedia.org/wiki/Oprah_Winfrey',
          image: 'images/Pre_Inaugural_Reception_(52639556983)_(cropped).jpeg',
        },
      ],
    },
    {
      title: 'The Silent Generation',
      minYear: 1928,
      maxYear: 1945,
      famousExamples: [
        {
          name: 'Jane Fonda',
          birthYear: '1937',
          wikiLink: 'https://en.wikipedia.org/wiki/Jane_Fonda',
          image: 'images/Jane_Fonda_Cannes_2015.jpeg',
        },
        {
          name: 'Morgan Freeman',
          birthYear: '1937',
          wikiLink: 'https://en.wikipedia.org/wiki/Morgan_Freeman',
          image: 'images/Morgan_Freeman_at_The_Pentagon_on_2_August_2023_-_230802-D-PM193-3363_(cropped).jpeg',
        },
      ],
    },
    {
      title: 'The Greatest Generation',
      minYear: 1901,
      maxYear: 1927,
      famousExamples: [
        {
          name: 'Greta Garbo',
          birthYear: '1905',
          wikiLink: 'https://en.wikipedia.org/wiki/Greta_Garbo',
          image: 'images/Garbo_in_Inspiration.jpeg',
        },
        {
          name: 'Alan Watts',
          birthYear: '1915',
          wikiLink: 'https://en.wikipedia.org/wiki/Alan_Watts',
          image: 'images/Alan_Watts.png',
        },
      ],
    },
  ].sort((a, b) => a.minYear - b.minYear);

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
