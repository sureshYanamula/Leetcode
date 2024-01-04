class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

// Function to print the linked list
function printList(head) {
  let temp = head;
  while (temp !== null) {
    console.log(`${temp.val} -> `);
    temp = temp.next;
  }
}

// Creating a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log("Original linked list:");
printList(head); // Printing the original linked list

// Reversing the linked list
const reversedHead = reverseList(head);

console.log("\nReversed linked list:");
printList(reversedHead); // Printing the reversed linked list
