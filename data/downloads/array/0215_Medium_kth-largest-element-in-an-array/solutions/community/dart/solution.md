# Dart Solution

**Author:** Friendlygecko
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/4439236/](https://leetcode.com/problems/kth-largest-element-in-an-array/solutions/4439236/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
credit to [The Algorithms](https://github.com/TheAlgorithms/Dart) for the min heap implementation

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int findKthLargest(List<int> nums, int k) {
    final minHeap = MinHeap();
    for (final num in nums) {
        minHeap.insert(num);
        if (minHeap.heap.length > k) {
            minHeap.remove();
        }
    }
    return minHeap.peek();
  }
}

class MinHeap {
  List<int> heap = [];

  void buildHeap(List<int> array) {
    this.heap = _heapify(array);
  }

  List<int> _heapify(List<int> array) {
    int firstParent = (array.length - 2) ~/ 2;
    for (int i = firstParent; i >= 0; i--) {
      _siftDown(i, array.length - 1, array);
    }
    return array;
  }

  int peek() {
    if (!isEmpty()) {
      return this.heap[0];
    }
    return -1;
  }

  bool isEmpty() {
    return this.heap.length == 0;
  }

  void _siftUp(int currentIndex) {
    int parentIndex = (currentIndex - 1) ~/ 2;
    while (
        parentIndex >= 0 && this.heap[parentIndex] > this.heap[currentIndex]) {
      _swap(parentIndex, currentIndex, this.heap);
      currentIndex = parentIndex;
      parentIndex = (currentIndex - 1) ~/ 2;
    }
  }

  void _siftDown(int currentIndex, int endIndex, List<int> heap) {
    int childOneIndex = (2 * currentIndex) + 1;
    int childTwoIndex;

    while (childOneIndex <= endIndex) {
      childTwoIndex =
          2 * currentIndex + 2 <= endIndex ? 2 * currentIndex + 2 : -1;
      int indexToSwap;
      if (childTwoIndex != -1 && heap[childTwoIndex] < heap[childOneIndex]) {
        indexToSwap = childTwoIndex;
      } else {
        indexToSwap = childOneIndex;
      }

      if (heap[currentIndex] > heap[indexToSwap]) {
        _swap(currentIndex, indexToSwap, heap);
        currentIndex = indexToSwap;
        childOneIndex = (2 * currentIndex) + 1;
      } else {
        break;
      }
    }
  }

  void insert(int value) {
    this.heap.add(value);
    _siftUp(this.heap.length - 1);
  }

  int remove() {
    if (!isEmpty()) {
      _swap(0, this.heap.length - 1, this.heap);
      int minElement = this.heap.removeLast();
      _siftDown(0, this.heap.length - 1, this.heap);
      return minElement;
    }
    return -1;
  }

  void _swap(int left, int right, List<int> array) {
    int temp;
    temp = array[left];
    array[left] = array[right];
    array[right] = temp;
  }
}
```