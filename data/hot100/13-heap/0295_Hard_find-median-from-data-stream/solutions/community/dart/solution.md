# Dart PriorityQueue Solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-median-from-data-stream/solutions/5136417/](https://leetcode.com/problems/find-median-from-data-stream/solutions/5136417/)

---

# Code
```
class MedianFinder {
  PriorityQueue<int> small = PriorityQueue((a, b) => b.compareTo(a));
  PriorityQueue<int> large = PriorityQueue();
  bool even = true;

  double findMedian() =>
      even ? (small.first + large.first) / 2.0 : small.first.toDouble();

  void addNum(int num) {
    if (even) {
      large.add(num);
      small.add(large.removeFirst());
    } else {
      small.add(num);
      large.add(small.removeFirst());
    }
    even = !even;
  }
}

// Priority Queue if not using package:collection/collection.dart
class PriorityQueue<E extends Comparable<dynamic>> {
  PriorityQueue([int Function(E, E)? comparison])
      : comparison = comparison ?? Comparable.compare;

  final List<E> _queue = [];
  final Comparator<E> comparison;
  bool get isEmpty => _queue.isEmpty;
  int get length => _queue.length;
  E get first => _queue.first;

  void add(E value) {
    _queue.add(value);
    var child = length - 1;
    var parent = _parentOf(child);
    while (child > 0 && child == _higherPriority(child, parent)) {
      _swapElements(child, parent);
      child = parent;
      parent = _parentOf(child);
    }
  }

  E removeFirst() {
    if (isEmpty) throw StateError('No element');
    _swapElements(0, length - 1);
    final firstElement = _queue.removeLast();
    var parentIndex = 0;
    while (true) {
      final leftIndex = _leftChildOf(parentIndex);
      final rightIndex = _rightChildOf(parentIndex);
      var chosen = _higherPriority(leftIndex, parentIndex);
      chosen = _higherPriority(rightIndex, chosen);
      if (chosen == parentIndex) break;
      _swapElements(parentIndex, chosen);
      parentIndex = chosen;
    }
    return firstElement;
  }

  int _leftChildOf(int parentIndex) => 2 * parentIndex + 1;
  int _rightChildOf(int parentIndex) => 2 * parentIndex + 2;
  int _parentOf(int childIndex) => (childIndex - 1) ~/ 2;

  int _higherPriority(int index1, int index2) {
    if (index1 >= length) return index2;
    final value1 = _queue[index1];
    final value2 = _queue[index2];
    return comparison(value1, value2).isNegative ? index1 : index2;
  }

  void _swapElements(int index1, int index2) {
    final temp = _queue[index1];
    _queue[index1] = _queue[index2];
    _queue[index2] = temp;
  }
}

```