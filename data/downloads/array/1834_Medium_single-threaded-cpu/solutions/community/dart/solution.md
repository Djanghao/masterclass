# Dart | MinHeap

**Author:** vladcto
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2969150/](https://leetcode.com/problems/single-threaded-cpu/solutions/2969150/)

---

# Code
```
class Solution {
  List<int> getOrder(List<List<int>> tasks) {
    //Generate array like [startTime, workTime, taskIndexInTasks]
    for (int i = 0; i < tasks.length; i++) {
      tasks[i].add(i);
    }
    //Sort by work time or if they equal sort by task index
    tasks.sort(((a, b) => a[0].compareTo(b[0]) * 2 - a[1].compareTo(b[1])));

    List<int> priority = [];

    int curTime = tasks[0][0], curTask = 0;
    MinHeap heap = MinHeap();
    while (priority.length < tasks.length) {
      //Add not added tasks
      while (curTask < tasks.length && tasks[curTask][0] <= curTime) {
        heap.addValue(tasks[curTask++]);
      }
      //All tasks are complete
      if (heap.isEmpty) {
        curTime = tasks[curTask][0];
        continue;
      }
      //Add min work time task of tasks currently available
      priority.add(heap.min[2]);
      curTime += heap.min[1];
      heap.removeMin();
    }
    return priority;
  }
}

class MinHeap {
  var _heap = <List<int>>[];

  List<int> get min => _heap[0];

  void addValue(List<int> value) {
    _heap.add(value);
    int i = _heap.length - 1;
    while (i > 0) {
      int parent = _parentIndex(i);
      if (_compare(_heap[i], _heap[parent])) {
        var tmp = _heap[parent];
        _heap[parent] = _heap[i];
        _heap[i] = tmp;
      }
      i = parent;
    }
  }

  void removeMin() {
    if (_heap.length == 0) return;
    if (_heap.length < 2) {
      _heap.removeAt(0);
      return;
    }
    _heap[0] = _heap.removeLast();
    int i = 0;
    while (_leftChildIndex(i) < _heap.length) {
      int lChild = _leftChildIndex(i);
      int rChild = _rightChildIndex(i) < _heap.length ? _rightChildIndex(i) : lChild;
      int maxChild = _compare(_heap[lChild], _heap[rChild]) ? lChild : rChild;
      if (_compare(_heap[maxChild], _heap[i])) {
        var tmp = _heap[maxChild];
        _heap[maxChild] = _heap[i];
        _heap[i] = tmp;
      } else {
        break;
      }
      i = maxChild;
    }
  }

  bool get isEmpty => _heap.isEmpty;

  bool _compare(List<int> a, List<int> b) =>
      a[1] < b[1] || (a[1] == b[1] && a[2] < b[2]);

  int _parentIndex(int childIndex) => (childIndex - 1) ~/ 2;

  int _leftChildIndex(int parentIndex) => parentIndex * 2 + 1;

  int _rightChildIndex(int parentIndex) => parentIndex * 2 + 2;
}

```