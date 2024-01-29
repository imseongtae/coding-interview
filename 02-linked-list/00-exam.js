/**
 * 주어진 링크드 리스트에서 특정 데이터를 가진 노드를 삭제한다.
 * @param {Node} head - 링크드 리스트의 헤드 노드
 * @param {*} data - 삭제할 노드의 데이터
 * @return {Node} - 삭제 후의 링크드 리스트의 헤드 노드
 */
function deleteNode(head, data) {
  // 리스트의 head가 삭제할 노드인 경우
  if (head !== null && head.data === data) {
    return head.next; // head 다음 노드를 새로운 head로 설정
  }
  
  let current = head;
  // 현재 노드의 다음 노드가 null이 아닐 때까지 순회
  while (current !== null && current.next !== null) {
    // 다음 노드의 데이터가 삭제할 데이터와 일치하는 경우
    if (current.next.data === data) {
      current.next = current.next.next; // 다음 노드를 건너뛰어 연결
      return head; // 변경된 리스트의 head 반환
    }
    current = current.next; // 다음 노드로 이동
  }
  
  return head; // 삭제되는 노드가 없으면 원래의 head 반환
}

// Node 클래스 정의 (예시)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}