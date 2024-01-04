class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

// Function to print the linked list
function printList(head) {
  let temp = head;
  while (temp !== null) {
    process.stdout.write(`${temp.val} -> `);
    temp = temp.next;
  }
  process.stdout.write("null\n");
}

// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original linked list:");
printList(head); // Printing the original linked list

// Finding the middle node of the linked list
const middle = middleNode(head);

console.log("\nMiddle node of the linked list:");
printList(middle); // Printing the middle node(s) of the linked list
