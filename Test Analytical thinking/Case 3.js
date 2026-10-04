function checkScholarship(
    studentName,
    averageScore,
    attendance,
    familyIncome,
    organizationMember
) {
    // Check the basic requirements
    const basicRequirement =
        averageScore >= 80 && attendance >= 90;

    // Determine the scholarship category
    const scholarshipCategory =
        !basicRequirement
            ? "Not Eligible"
            : familyIncome <= 3000000 && organizationMember
            ? "Category A"
            : familyIncome <= 5000000 && organizationMember
            ? "Category B"
            : "Not Eligible";

    // Display the result
    console.log(`
Student: ${studentName}
Average Score: ${averageScore}
Attendance: ${attendance}%
Family Income: Rp${familyIncome}
Organization Member: ${organizationMember}
Basic Requirement: ${basicRequirement ? "Passed" : "Failed"}
Scholarship Category: ${scholarshipCategory}
`);
}


// Student 1
checkScholarship(
    "Siti",
    86,
    92,
    4000000,
    true
);


// Student 2
checkScholarship(
    "Andi",
    75,
    95,
    2000000,
    true
);


// Student 3
checkScholarship(
    "Rina",
    90,
    88,
    2000000,
    true
);