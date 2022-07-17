class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function isPalindrome(head: ListNode | null): boolean {
  let vals = [];

  while (head !== null) {
    vals.push(head.val);
    head = head.next;
  }

  return vals.join("") === vals.reverse().join("");
}
