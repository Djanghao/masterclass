# Dart - With MinHeap code

**Author:** Nono31
**Votes:** 0
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4742803/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/4742803/)

---


# Code
```
class Solution {

  int furthestBuilding(List<int> heights, int bricks, int ladders) {
    int bricksNeeded = 0;
    Heap heap = Heap();

    int i = 0;
    int length = heights.length;
    int prevH = heights[0];
    while (i < length) {
      int gap = heights[i] - prevH;
      prevH = heights[i];
      if (gap <= 0) {
        i++;
        continue;
      }
      if (ladders > 0) {
        heap.add(gap);
        ladders--;
        i++;
        continue;
      }
      if (heap.isNotEmpty && gap > heap.first) {
        int prevGap = heap.removeFirst();
        heap.add(gap);
        bricksNeeded += prevGap;
      } else {
        bricksNeeded += gap;
      }
      if (bricksNeeded > bricks) {
        return i - 1;
      } else {
        i++;
        continue;
      }
    }
    return i - 1;
  }
}

class Heap {
  List<int> arr = [];
  Heap() {}

  bool get isNotEmpty {
    return arr.isNotEmpty;
  }

  int get first {
    return arr[0];
  }

  int removeFirst() {
    if (arr.isEmpty) {
      throw Exception("Heap is empty");
    }
    if (arr.length == 1) return arr.removeLast();
    int min = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.removeLast();
    heapifyDown(0);
    return min;
  }

  void add(int val) {
    arr.add(val);
    heapifyUp(arr.length - 1);
  }

  void heapifyDown(int i) {
    int left = 2 * i + 1;
    int? leftVal = left < arr.length ? arr[left] : null;
    int right = 2 * i + 2;
    int? rightVal = right < arr.length ? arr[right] : null;
    if (leftVal != null) {
      if (rightVal != null && arr[i] > min(rightVal, leftVal)) {
        int to = leftVal < rightVal ? left : right;
        swap(i, to);
        heapifyDown(to);
      } else if (arr[i] > leftVal) {
        int to = left;
        swap(i, to);
        heapifyDown(to);
      }
    }
  }

  void swap(from, to) {
    int tmp = arr[from];
    arr[from] = arr[to];
    arr[to] = tmp;
  }

  void heapifyUp(int i) {
    if (i <= 0) return;
    int parent = (i - 1) ~/ 2;
    if (arr[parent] > arr[i]) {
      swap(i, parent);
      heapifyUp(parent);
    }
  }
}
```