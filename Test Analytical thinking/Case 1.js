const studentName = "Andi";
const assignment = 80;
const midterm = 75;
const finalExam = 90;

// Calculate the final score
const finalScore =
    (assignment * 0.30) +
    (midterm * 0.30) +
    (finalExam * 0.40);

// Determine pass or fail
const status = finalScore >= 70 ? "Passed" : "Failed";

// Determine the category
const category =
    finalScore >= 85
        ? "Excellent"
        : finalScore >= 70
        ? "Good"
        : "Failed";

// Display the result
console.log(`
Student: ${studentName}
Assignment: ${assignment}
Midterm: ${midterm}
Final Exam: ${finalExam}
Final Score: ${finalScore}
Status: ${status}
Category: ${category}
`);