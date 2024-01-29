/**
 * 주어진 노드가 리스트의 중간에 위치할 때, 해당 노드를 삭제
 * 이 문제에서는 노드에 대한 참조만 주어지며, 일반적으로 이전 노드에 대한 참조 없이 삭제해야 함
 * @param {Node} nodeToDelete - 삭제할 노드
 * @return {boolean} - 삭제가 성공하면 true, 그렇지 않으면 false 반환
 */
const deleteMiddleNode = (nodeToDelete) => {
  // 노드가 null이거나 마지막 노드인 경우 삭제할 수 없으므로 false 반환
  if (nodeToDelete === null || nodeToDelete.next === null) {
    return false;
  }
  
  // 다음 노드의 데이터를 현재 노드로 복사하고, 다음 노드를 건너뛰어 연결
  nodeToDelete.data = nodeToDelete.next.data;
  nodeToDelete.next = nodeToDelete.next.next;
  return true;
}

// Node 클래스 정의 (예시)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 시간 복잡도: O(1) - 상수 시간 안에 노드 삭제가 완료
 * 공간 복잡도: O(1) - 추가 공간을 사용하지 않고 주어진 노드에서 직접 작업
 * 요약: 주어진 노드를 O(1)의 시간과 공간 복잡도로 삭제
 */