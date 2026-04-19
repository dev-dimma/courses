// BONUS: Write a function called summarizeStudent that accepts an array of student objects (each with name and score). The function should return a new array of strings in this format:
// 'Amara scored 88 — Grade: B'
// Use your gradeScore function from Q8 inside this one.

function gradeScore(score) {
  if (score >= 70) {
    return "A";
  } else if (score >= 60 && score <= 69) {
    return "B";
  } else if (score >= 50 && score <= 59) {
    return "C";
  } else if (score >= 40 && score <= 49) {
    return "D";
  } else if (score < 40) {
    return "F";
  } else {
    return "Invalid score";
  }
}

function summarizeStudent(students) {
  return students.map((student) => {
    return `${student.name} scored ${student.score} — Grade: ${gradeScore(student.score)}`;
  });
}

const students = [
  { name: "Amara", score: 88 },
  { name: "Tunde", score: 62 },
  { name: "Chisom", score: 45 },
  { name: "Bola", score: 30 },
];

console.log(summarizeStudent(students));
