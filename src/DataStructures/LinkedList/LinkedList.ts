class ListNode<T> {
  data: T;
  next: ListNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export default class LinkedList<T> {
  head: ListNode<T> | null = null;
  tail: ListNode<T> | null = null;

  // add to end of list
  append(data: T) {
    const node = new ListNode(data);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  // add to start of list
  prepend(data: T) {
    const node = new ListNode(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      const temp = this.head;
      this.head = node;
      node.next = temp;
    }
  }
}
