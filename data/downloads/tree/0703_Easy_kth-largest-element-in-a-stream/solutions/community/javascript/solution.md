# JavaScript Min Heap solution

**Author:** shengdade
**Votes:** 29
**Link:** [https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/504552/](https://leetcode.com/problems/kth-largest-element-in-a-stream/solutions/504552/)

---

```javascript
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.heap = new MinHeap();
  nums.forEach(n => this.add(n));
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  if (this.heap.size() < this.k) {
    this.heap.offer(val);
  } else if (this.heap.peek() < val) {
    this.heap.offer(val);
    this.heap.poll();
  }
  return this.heap.peek();
};

class MinHeap {
  constructor(data = []) {
    this.data = data;
    this.comparator = (a, b) => a - b;
    this.heapify();
  }

  // O(nlog(n))
  heapify() {
    if (this.size() < 2) return;
    for (let i = 1; i < this.size(); i++) {
      this.bubbleUp(i);
    }
  }

  // O(1)
  peek() {
    if (this.size() === 0) return null;
    return this.data[0];
  }

  // O(log(n))
  offer(value) {
    this.data.push(value);
    this.bubbleUp(this.size() - 1);
  }

  // O(log(n))
  poll() {
    if (this.size() === 0) return null;
    const result = this.data[0];
    const last = this.data.pop();
    if (this.size() !== 0) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return result;
  }

  // O(log(n))
  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = (index - 1) >> 1;
      if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
        this.swap(index, parentIndex);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // O(log(n))
  bubbleDown(index) {
    const lastIndex = this.size() - 1;
    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;
      let findIndex = index;
      if (
        leftIndex <= lastIndex &&
        this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
      ) {
        findIndex = leftIndex;
      }
      if (
        rightIndex <= lastIndex &&
        this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
      ) {
        findIndex = rightIndex;
      }
      if (index !== findIndex) {
        this.swap(index, findIndex);
        index = findIndex;
      } else {
        break;
      }
    }
  }

  // O(1)
  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1]
    ];
  }

  // O(1)
  size() {
    return this.data.length;
  }
}
```

### Results:
* 10/10 cases passed (132 ms)
* Your runtime beats 85.35 % of javascript submissions
* Your memory usage beats 50 % of javascript submissions (45 MB)

### Time Analysis:
* Construction: **O(nlog(k))**
* Add: O(log(k) + O(1) = **O(log(k))**
* Totoal: **O(nlog(k))**