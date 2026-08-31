# 🌟 Super Easy || 🔼 Build a Max Heap || 🔄 Update || ✅ Get the Answer 🚀

**Author:** mansimittal935
**Votes:** 2
**Link:** [https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6138816/](https://leetcode.com/problems/take-gifts-from-the-richest-pile/solutions/6138816/)

---

# Intuition \uD83E\uDDE0\u2728
We want to maximize efficiency while repeatedly reducing the largest gift's value. By using a max heap \uD83C\uDFD4\uFE0F, we can always access the largest value in constant time, and we update it with its square root for k iterations. The sum of all gifts \uD83D\uDCB0 at the end gives the answer.

---

# Approach \uD83D\uDE80
## Build a Max Heap \uD83C\uDFD7\uFE0F: Insert all gift values into a max heap (priority queue in C++).
## Update \uD83D\uDD04:
- Extract the largest value \uD83C\uDF81 using top() and replace it with its floor square root \uD83E\uDDEE.
- Push the updated value back into the heap.
## Sum the Remaining Gifts \u2795: Pop all elements from the heap and accumulate their sum for the final answer \u2705.

---

# Complexity \u23F1\uFE0F\u2728
### Time: *O(n + k log n)* 
- \uD83C\uDFD7\uFE0FBuild Heap O(n) + \uD83D\uDD04 Updates O(k log n). Efficient! \uD83D\uDE80
### Space: *O(n)* 
- \uD83E\uDDF3 for the heap. Compact! \u2705

---

# Code
```cpp []
class Solution {
public:
    long long pickGifts(vector<int>& gifts, int k) {
        priority_queue<int> maxHeap;
        for(int val: gifts) {
            maxHeap.push(val);
        }

        while(k > 0) {
            int val = maxHeap.top();
            maxHeap.pop();

            int rem = floor(sqrt(val));
            maxHeap.push(rem);
            k--;
        }
        long long ans = 0;
        while(!maxHeap.empty()) {
            ans += maxHeap.top();
            maxHeap.pop();
        }
        return ans;
    }
};
```

```java []
import java.util.*;

public class Solution {
    public long pickGifts(int[] gifts, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());
        for (int val : gifts) {
            maxHeap.add(val);
        }

        while (k > 0) {
            int val = maxHeap.poll();
            int rem = (int) Math.floor(Math.sqrt(val));
            maxHeap.add(rem);
            k--;
        }

        long ans = 0;
        while (!maxHeap.isEmpty()) {
            ans += maxHeap.poll();
        }
        return ans;
    }
}

```
```javascript []
function pickGifts(gifts, k) {
    const maxHeap = new MaxHeap();
    gifts.forEach(val => maxHeap.push(val));

    while (k > 0) {
        let val = maxHeap.pop();
        let rem = Math.floor(Math.sqrt(val));
        maxHeap.push(rem);
        k--;
    }

    let ans = 0;
    while (maxHeap.size() > 0) {
        ans += maxHeap.pop();
    }

    return ans;
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] <= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        while (2 * idx + 1 < this.heap.length) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let largerChildIdx = leftChildIdx;

            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[leftChildIdx]) {
                largerChildIdx = rightChildIdx;
            }

            if (this.heap[idx] >= this.heap[largerChildIdx]) break;
            [this.heap[idx], this.heap[largerChildIdx]] = [this.heap[largerChildIdx], this.heap[idx]];
            idx = largerChildIdx;
        }
    }
}

```
```python []
import heapq
import math

class Solution:
    def pickGifts(self, gifts, k):
        maxHeap = [-val for val in gifts]
        heapq.heapify(maxHeap)

        while k > 0:
            val = -heapq.heappop(maxHeap)
            rem = int(math.floor(math.sqrt(val)))
            heapq.heappush(maxHeap, -rem)
            k -= 1

        return sum(-val for val in maxHeap)

```
```c# []
using System;
using System.Collections.Generic;

public class Solution {
    public long PickGifts(List<int> gifts, int k) {
        var maxHeap = new PriorityQueue<int, int>();
        foreach (var val in gifts) {
            maxHeap.Enqueue(val, -val); // Invert to simulate max-heap
        }

        while (k > 0) {
            int val = maxHeap.Dequeue();
            int rem = (int)Math.Floor(Math.Sqrt(val));
            maxHeap.Enqueue(rem, -rem);
            k--;
        }

        long ans = 0;
        while (maxHeap.Count > 0) {
            ans += maxHeap.Dequeue();
        }
        return ans;
    }
}

```
```ruby []
require 'priority_queue'

class Solution
  def pick_gifts(gifts, k)
    max_heap = PriorityQueue.new
    gifts.each { |val| max_heap.push(val, val) }

    while k > 0
      val = max_heap.pop
      rem = Math.sqrt(val).floor
      max_heap.push(rem, rem)
      k -= 1
    end

    ans = 0
    while !max_heap.empty?
      ans += max_heap.pop
    end
    ans
  end
end

```
```rust []
use std::collections::BinaryHeap;

impl Solution {
    pub fn pick_gifts(gifts: Vec<i32>, mut k: i32) -> i64 {
        let mut max_heap = BinaryHeap::new();
        for &val in &gifts {
            max_heap.push(val);
        }

        while k > 0 {
            let val = max_heap.pop().unwrap();
            let rem = (val as f64).sqrt().floor() as i32;
            max_heap.push(rem);
            k -= 1;
        }

        let mut ans = 0;
        while let Some(val) = max_heap.pop() {
            ans += val as i64;
        }
        ans
    }
}

```
```typescript []
class Solution {
    pickGifts(gifts: number[], k: number): number {
        const maxHeap = new MaxHeap();
        gifts.forEach(val => maxHeap.push(val));

        while (k > 0) {
            let val = maxHeap.pop();
            let rem = Math.floor(Math.sqrt(val));
            maxHeap.push(rem);
            k--;
        }

        let ans = 0;
        while (maxHeap.size() > 0) {
            ans += maxHeap.pop();
        }

        return ans;
    }
}

class MaxHeap {
    private heap: number[] = [];

    push(val: number) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop(): number {
        if (this.heap.length === 1) return this.heap.pop()!;
        const root = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this._heapifyDown();
        return root;
    }

    size(): number {
        return this.heap.length;
    }

    private _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] <= this.heap[parentIdx]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    private _heapifyDown() {
        let idx = 0;
        while (2 * idx + 1 < this.heap.length) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let largerChildIdx = leftChildIdx;

            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[leftChildIdx]) {
                largerChildIdx = rightChildIdx;
            }

            if (this.heap[idx] >= this.heap[largerChildIdx]) break;
            [this.heap[idx], this.heap[largerChildIdx]] = [this.heap[largerChildIdx], this.heap[idx]];
            idx = largerChildIdx;
        }
    }
}

```
```go []
import (
    "container/heap"
    "math"
)

type MaxHeap []int

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }  // Max-heap order
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *MaxHeap) Push(x interface{}) { *h = append(*h, x.(int)) }
func (h *MaxHeap) Pop() interface{} {
    old := *h
    n := len(old)
    x := old[n-1]
    *h = old[0 : n-1]
    return x
}

func pickGifts(gifts []int, k int) int64 {
    maxHeap := &MaxHeap{}
    heap.Init(maxHeap)
    
    for _, val := range gifts {
        heap.Push(maxHeap, val)
    }

    for k > 0 {
        val := heap.Pop(maxHeap).(int)
        rem := int(math.Floor(math.Sqrt(float64(val))))
        heap.Push(maxHeap, rem)
        k--
    }

    var ans int64
    for maxHeap.Len() > 0 {
        ans += int64(heap.Pop(maxHeap).(int))
    }
    return ans
}

```
