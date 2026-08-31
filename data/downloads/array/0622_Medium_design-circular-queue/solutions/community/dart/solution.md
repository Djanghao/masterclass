# Beat 100% in Runtime || 100% in Memory || Using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-circular-queue/solutions/5303255/](https://leetcode.com/problems/design-circular-queue/solutions/5303255/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MyCircularQueue {
  List<int?> _queue;
  int _head;
  int _tail;
  int _size;
  final int _capacity;

  MyCircularQueue(int k)
      : _queue = List<int?>.filled(k, null),
        _capacity = k,
        _size = 0,
        _head = -1,
        _tail = -1;

  bool enQueue(int value) {
    if (isFull()) {
      return false;
    }
    if (isEmpty()) {
      _head = 0;
    }
    _tail = (_tail + 1) % _capacity;
    _queue[_tail] = value;
    _size++;
    return true;
  }

  bool deQueue() {
    if (isEmpty()) {
      return false;
    }
    if (_head == _tail) {
      _head = -1;
      _tail = -1;
    } else {
      _head = (_head + 1) % _capacity;
    }
    _size--;
    return true;
  }

  int Front() {
    if (isEmpty()) {
      return -1;
    }
    return _queue[_head]!;
  }

  int Rear() {
    if (isEmpty()) {
      return -1;
    }
    return _queue[_tail]!;
  }

  bool isEmpty() {
    return _size == 0;
  }

  bool isFull() {
    return _size == _capacity;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = MyCircularQueue(k);
 * bool param1 = obj.enQueue(value);
 * bool param2 = obj.deQueue();
 * int param3 = obj.Front();
 * int param4 = obj.Rear();
 * bool param5 = obj.isEmpty();
 * bool param6 = obj.isFull();
 */

```