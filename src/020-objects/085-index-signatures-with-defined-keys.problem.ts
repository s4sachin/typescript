interface Scores {
  [extraSubjects: string]: number
  english: number,
  math: number,
  science: number,
}

/* 
Alternatively 

interface MainSubjects {
  math: number,
  science: number,
  english: number
  }

  interface ExtraSubjects extends MainSubjects {
    [extraSubjects: string]: number
  }
*/

// @ts-expect-error science is missing!
const scores: Scores = {
  math: 95,
  english: 90,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
