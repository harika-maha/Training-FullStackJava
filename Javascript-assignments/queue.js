let stack1 = [];
let stack2 = [];
function enqueue(element) {
  stack1.push(element);
  console.log("Stack-1 elements are in enqueue: ", stack1);
}
function dequeue() {
  if (stack2.length === 0) {
    if (stack1.length === 0) {
      console.log("Dequeue not possible because queue is empty..");
    }
    while (stack1.length > 0) {
      let x = stack1.pop();
      stack2.push(x);
    }
  }
  console.log("Element after Dequeue: " + stack2.pop());
}

enqueue("f");
enqueue("b");
enqueue("k");
dequeue();
dequeue();
