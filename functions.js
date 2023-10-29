const Stack = require("./stack");
const Queue = require("./queue");
const Deque = require("./deque");

/** stringReversal(str): uses a stack to reverse the characters in a string. */
const stringReversal = (str) => {
  const stack = new Stack();
  let reversed = "";
  for (let char of str) {
    stack.push(char);
  }
  while (!stack.isEmpty()) {
    reversed += stack.pop();
  }
  return reversed;
};

/**balancedBrackets(str) determines if a string that includes brackets is balanced.*/
const balancedBrackets = (str) => {
  const stack = new Stack();
  const open = "({[";
  const close = ")}]";
  for (let char of str) {
    if (open.includes(char)) {
      stack.push(char);
    } else if (close.includes(char)) {
      if (stack.isEmpty()) return false;
      let top = stack.pop();
      if (open.indexOf(top) !== close.indexOf(char)) return false;
    }
  }
  return stack.isEmpty();
};

/** findSurvivor(numSubjects, skip): finds the survivor*/
const findSurvivor = (numSubjects, skip) => {
  const queue = new Queue();
  for (let i = 1; i <= numSubjects; i++) {
    queue.enqueue(i);
  }
  while (queue.size > 1) {
    for (let i = 1; i < skip; i++) {
      queue.enqueue(queue.dequeue());
    }
    queue.dequeue();
  }
  return queue.peek();
};

module.exports = { stringReversal, balancedBrackets, findSurvivor };
