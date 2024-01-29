class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function deleteNode(node) {
  if (node == null || node.next == null) {
    throw new Error("Invalid node or last node cannot be deleted this way.");
  }

  node.data = node.next.data; // 다음 노드의 데이터를 현재 노드로 복사
  node.next = node.next.next; // 다음 노드를 현재 노드의 다음 다음 노드로 연결
}

// 사용 예
const a = new ListNode('A');
const b = new ListNode('B');
const c = new ListNode('C');

a.next = b;
b.next = c;

console.log("Before deletion:");
console.log("a ->", a.data);
console.log("b ->", b.data);
console.log("c ->", c.data);

deleteNode(b); // 노드 B 삭제

console.log("After deletion:");
console.log("a ->", a.data);
console.log("b ->", a.next.data); // 이전의 노드 C가 이제 노드 B의 위치에 있음
