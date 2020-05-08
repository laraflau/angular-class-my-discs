export type Disc = {
  title: string;
  author: string;
  year: number;
  description: string;
  cover_img: string;
};

const cover_path = 'assets/albums';

export const discs: Disc[] = [
  {
    title: 'Nevermind',
    author: 'Nirvana',
    year: 1991,
    description:
      'Nevermind é o segundo álbum de estúdio da banda grunge estadunidense Nirvana, lançado em 24 de setembro de 1991. Produzido por Butch Vig, foi o primeiro álbum lançado pela DGC Records.',
    cover_img: `${cover_path}/cover-nevermind-nirvana.jpg`,
  },
  {
    title: 'A Night at the Opera',
    author: 'Queen',
    year: 1975,
    description:
      'A Night at the Opera é o quarto álbum de estúdio da banda britânica de rock Queen, lançado em 21 de novembro de 1975 na Europa e em 2 de dezembro de 1975 nas Américas.',
    cover_img: `${cover_path}/cover-a-night-at-the-opera-queen.jpg`,
  },
  {
    title: 'Love Gun',
    author: 'Kiss',
    year: 1977,
    description:
      'Love Gun é o sexto álbum de estúdio da banda de rock norte-american Kiss. Pela primeira vez, todos os integrantes cantam em pelo menos uma faixa no disco.',
    cover_img: `${cover_path}/cover-love-gun-kiss.jpg`,
  },
];
