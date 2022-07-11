class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function middleNode(head: ListNode | null): ListNode | null {
  const refs: ListNode[] | null = [];

  while (head !== null) {
    refs.push(head);
    head = head.next;
  }

  return refs[Math.floor(refs.length / 2)];
}
