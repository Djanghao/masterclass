# [Dart] Doubly Linked List

**Author:** MaratTazhetdinov
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-circular-deque/solutions/5841821/](https://leetcode.com/problems/design-circular-deque/solutions/5841821/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
This implementation defines a circular deque (double-ended queue) using a doubly linked list. A deque allows insertion and deletion at both ends, which is implemented here with the insertFront, insertLast, deleteFront, and deleteLast methods.

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(k), where k is the maximum length of the deque.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class QueueNode {
  final int val;
  QueueNode? prev;
  QueueNode? next;

  QueueNode({
    required this.val,
    this.next,
    this.prev,
  });
}

class MyCircularDeque {
  late int currentLength;
  late int maxLength;
  QueueNode? head;
  QueueNode? tail;

  MyCircularDeque(int k) {
    currentLength = 0;
    maxLength = k;
  }

  bool insertFront(int value) {
    if (currentLength == maxLength) {
      return false;
    }

    final node = QueueNode(val: value);

    if (currentLength == 0) {
      head = node;
      tail = node;
    } else {
      head?.prev = node;
      node.next = head;
      head = head?.prev;
    }

    currentLength++;
    return true;
  }

  bool insertLast(int value) {
    if (currentLength == maxLength) {
      return false;
    }

    final node = QueueNode(val: value);

    if (currentLength == 0) {
      head = node;
      tail = node;
    } else {
      tail?.next = node;
      node.prev = tail;
      tail = tail?.next;
    }

    currentLength++;
    return true;
  }

  bool deleteFront() {
    if (currentLength == 0) {
      return false;
    }

    if (currentLength == 1) {
      head = null;
      tail = null;
    } else {
      head = head?.next;
      head?.prev = null;
    }

    currentLength--;
    return true;
  }

  bool deleteLast() {
    if (currentLength == 0) {
      return false;
    }

    if (currentLength == 1) {
      head = null;
      tail = null;
    } else {
      tail = tail?.prev;
      tail?.next = null;
    }

    currentLength--;
    return true;
  }

  int getFront() {
    return head?.val ?? -1;
  }

  int getRear() {
    return tail?.val ?? -1;
  }

  bool isEmpty() {
    return currentLength == 0;
  }

  bool isFull() {
    return currentLength == maxLength;
  }
}
/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * MyCircularDeque obj = MyCircularDeque(k);
 * bool param1 = obj.insertFront(value);
 * bool param2 = obj.insertLast(value);
 * bool param3 = obj.deleteFront();
 * bool param4 = obj.deleteLast();
 * int param5 = obj.getFront();
 * int param6 = obj.getRear();
 * bool param7 = obj.isEmpty();
 * bool param8 = obj.isFull();
 */
```