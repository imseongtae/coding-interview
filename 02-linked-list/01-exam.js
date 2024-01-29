class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 노드 추가 메소드
  append(data) {
    const newNode = new ListNode(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // 중복 제거 메소드
  removeDuplicates() {
    let current = this.head;
    let prev = null;
    const seen = new Set();

    while (current) {
      if (seen.has(current.data)) {
        prev.next = current.next;
      } else {
        seen.add(current.data);
        prev = current;
      }
      current = current.next;
    }
  }

  // 리스트 출력 메소드
  print() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// 사용 예
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(2);
list.append(3);
list.append(4);

console.log("Original List:");
list.print();

list.removeDuplicates();

console.log("List after removing duplicates:");
list.print();
