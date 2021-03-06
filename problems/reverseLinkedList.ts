class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function reverseList(head: ListNode | null): ListNode | null {
  let newListHead: ListNode | null = null;

  while (head !== null) {
    newListHead = new ListNode(head.val, newListHead);
    head = head.next;
  }

  return newListHead;
}
