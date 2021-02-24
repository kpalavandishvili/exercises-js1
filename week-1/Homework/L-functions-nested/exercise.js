function percentage(mentors, total) {
 return mentors / total * 100;

    
}
let students = 10;
let mentors = 3;
let mentorsPercent = percentage(mentors, students + mentors);
let studentsPercent = percentage(students, students + mentors);

function createMessage(groupName, value) {
    return `Percentage ${groupName}: ${Math.round (value)}%`;
    
}
console.log(createMessage(`students`, studentsPercent));
console.log(createMessage(`mentors`, mentorsPercent));