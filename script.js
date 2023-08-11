const players = ["John", "Bob", "Alice", "Poppy"];

const person = {
  name: "John Doe",
  age: 80,
};
let team = players;
let team1=[];
for (const i of players) {
    team1.push(i);
}
let cap1={}
for (const key in person) {
    cap1[key]=person[key]
}
// Write your code here, make sure the name of variables is exactly same as mentioned in the problem statement

window.players = players;
window.person = person;
window.team = team;
window.team1 = team1;
window.cap1 = cap1;
