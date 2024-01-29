/** NOTE: 기본적인 연결 리스트 노드 클래스를 정의 */
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


/** NOTE: 두 연결 리스트의 합을 계산하는 함수 */
const addLists = (l1, l2) => {
  let carry = 0;
  let resultHead = new ListNode(0); // 덧셈 결과를 저장할 리스트의 헤드
  let currentNode = resultHead;

  while (l1 || l2 || carry) {
    let sum = 0;
    if (l1) {
      sum += l1.value;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.value;
      l2 = l2.next;
    }

    sum += carry;
    carry = Math.floor(sum / 10); // 다음 자리수로 넘길 carry 값 계산
    currentNode.next = new ListNode(sum % 10); // 새 노드 추가
    currentNode = currentNode.next;
  }

  return resultHead.next; // 첫 번째 더미 노드를 제외하고 반환
}


// 연결 리스트 생성 함수
const createList = (arr) => {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// 연결 리스트 출력 함수
const printList = (head) => {
  let current = head;
  let output = '';

  while (current) {
    output += current.value + ' -> ';
    current = current.next;
  }
  console.log(output + 'null');
}

// 연결 리스트 예시
let l1 = createList([7, 1, 6]); // 617
let l2 = createList([5, 9, 2]); // 295

let result = addLists(l1, l2);
printList(result); // 2 -> 1 -> 9 -> null : 912
