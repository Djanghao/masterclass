# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/4537866/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/4537866/)

---


Credit to [The Algorithms](https://the-algorithms.com/)
[Dart Max Heap Implementation](https://the-algorithms.com/algorithm/max-heap?lang=dart)

# Code
```
class Solution {
  int halveArray(List<int> nums) {
    var ans = 0;
    final maxHeap = MaxHeap();
    final numsDouble = nums.map((e) => e.toDouble()).toList();
    maxHeap.buildHeap(numsDouble);
    var sum = numsDouble.fold<double>(0.0, (a,b) => a + b);
    var t = sum;
    while (t > sum / 2) {
        var largest = maxHeap.remove() ?? 0;
        largest = largest / 2;
        t -= largest;
        maxHeap.insert(largest);
        ans++;
    }
    return ans;
  }
}

class MaxHeap<T extends num> {
  List<T> heap = [];

  void buildHeap(List<T> array) {
    this.heap = _heapify(array);
  }

  List<T> _heapify(List<T> array) {
    int firstParent = (array.length - 2) ~/ 2;
    for (int i = firstParent; i >= 0; i--) {
      _siftDown(i, array.length - 1, array);
    }
    return array;
  }

  T? peek() {
    if (!isEmpty()) {
      return this.heap[0];
    }
    return null;
  }

  bool isEmpty() {
    return this.heap.length == 0;
  }

  void _siftUp(int currentIndex) {
    int parentIndex = (currentIndex - 1) ~/ 2;
    while (
        parentIndex >= 0 && this.heap[parentIndex] < this.heap[currentIndex]) {
      _swap(parentIndex, currentIndex, this.heap);
      currentIndex = parentIndex;
      parentIndex = (currentIndex - 1) ~/ 2;
    }
  }

  void _siftDown(int currentIndex, int endIndex, List<T> heap) {
    int childOneIndex = (2 * currentIndex) + 1;
    int childTwoIndex;

    while (childOneIndex <= endIndex) {
      childTwoIndex =
          2 * currentIndex + 2 <= endIndex ? 2 * currentIndex + 2 : -1;
      int indexToSwap;
      if (childTwoIndex != -1 && heap[childTwoIndex] > heap[childOneIndex]) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }

      if (heap[currentIndex] < heap[indexToSwap]) {
        _swap(currentIndex, indexToSwap, heap);
        currentIndex = indexToSwap;
        childOneIndex = (2 * currentIndex) + 1;
      } else {
        break;
      }
    }
  }

  void insert(T value) {
    this.heap.add(value);
    _siftUp(this.heap.length - 1);
  }

  T? remove() {
    if (!isEmpty()) {
      _swap(0, this.heap.length - 1, this.heap);
      T maxElement = this.heap.removeLast();
      _siftDown(0, this.heap.length - 1, this.heap);
      return maxElement;
    }
    return null;
  }

  void _swap(int left, int right, List<T> array) {
    T temp;
    temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
}
```