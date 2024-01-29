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

  append(data) {
    if (!this.head) {
      this.head = new ListNode(data);
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new ListNode(data);
  }

  findKthToLast(k) {
    let p1 = this.head;
    let p2 = this.head;

    // p1을 k 노드만큼 앞으로 이동시킵니다.
    for (let i = 0; i < k; i++) {
      if (p1 === null) return null; // k가 노드의 수보다 많은 경우
      p1 = p1.next;
    }

    // p1이 리스트의 끝에 도달할 때까지 p1과 p2를 이동시킵니다.
    while (p1 !== null) {
      p1 = p1.next;
      p2 = p2.next;
    }

    return p2;
  }
}

// 사용 예시
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const kthToLast = list.findKthToLast(2);
if (kthToLast !== null) {
  console.log(kthToLast.data); // 4 출력 (뒤에서 두 번째 노드)
} else {
  console.log("Such a node doesn't exist.");
}
