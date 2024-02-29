const computer = {memory: '16GB', HD: '8TB'}

const laptop = Object.create(computer);
console.log(laptop.memory);
console.log(laptop.HD);
console.log(computer);