
interface Score {
    [subject: string]: number
}

// Alternate solution using Record Utility type 
// type Score = Record<string,>


const scores: Score  = {} ;

scores.math = 95;
scores.english = 90;
scores.science = 85;
