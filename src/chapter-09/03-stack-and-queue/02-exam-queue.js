/** NOTE: 스택의 기본 코드 */
function Queue(array) {
  this.array = [];
  if (array) {
    this.array = array;
  }
}

Queue.prototype.getBuffer = function() {
  return this.array.slice();
}

Queue.prototype.isEmpty = function() {
  return this.array.length === 0;
}

// 큐의 인스턴스
var queue1 = new Queue();

console.log(queue1); // { array: [] }

Queue.prototype.push = function(value) {
  this.array.push(value);
};

console.log('===== NOTE: 들여다보기 =====');
{
  /** ===== NOTE: 들여다보기 ===== */
  Queue.prototype.peek = function() {
    return this.array[0];
  }
  
  queue1.push(1);
  queue1.push(2);
  queue1.push(3);
  console.log(queue1.peek()); // 1
}

console.log('===== NOTE: 삭제 =====');
{
  console.log('===== NOTE: 삭제 =====');
  Queue.prototype.pop = function() {
    return this.array.shift();
  }

  queue1.pop(1);
  queue1.pop(2);
  queue1.pop(3);

  console.log(queue1); // { array: [] }
}

console.log('===== NOTE: 접근 =====');
{
  /** ===== NOTE: 접근 ===== */
  function queueAccessNthTopNode(queue, n) {
    var bufferArray = queue.getBuffer();
    if (n <= 0) throw 'error';

    var bufferQueue = new Queue(bufferArray);
    
    while (--n !== 0) {
      bufferQueue.pop();
    }
    return bufferQueue.pop();
  }
}

console.log('===== NOTE: 검색 =====');
{
  /** ===== NOTE: 검색 ===== */
  function queueSearch(queue, element) {
    var bufferArray = queue.getBuffer();
    var bufferQueue = new Queue(bufferArray);

    while (!bufferQueue.isEmpty()) {
      if (bufferQueue.pop() === element) {
        return true;
      }
    }
    return false;
  }
}
