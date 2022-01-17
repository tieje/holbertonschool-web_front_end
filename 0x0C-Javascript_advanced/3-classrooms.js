const createClassRoom = (numberOfStudents) => {
  const studentSeat = (seat) => {
    const seatNumber = (aseat) => {
      return (aseat + 1);
    };
    return (seatNumber(seat));
  };
  const students = [];
  for (let i = 0; i < numberOfStudents; i++) {
    students.push(studentSeat(i));
  }
  return (students);
};
const classRoom = () => createClassRoom(10);
console.log(classRoom());
// The person who wrote the console.log() statements did not test out their code. Below are the correct test statements
console.log(classRoom()[0]);
console.log(classRoom()[3]);
console.log(classRoom()[9]);
