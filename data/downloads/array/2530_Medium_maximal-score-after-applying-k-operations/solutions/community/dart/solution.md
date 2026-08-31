# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5910333/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5910333/)

---

![image.png](./images/0.png)


### **Intuition**
The problem involves maximizing the score by repeatedly selecting the largest element from a list, adding it to the score, and reducing its value. The process is repeated a set number of times. This hints towards using a **max heap** to efficiently retrieve the largest value.

### **Approach**
1. Use a **max heap** (priority queue) to store all the elements of the input list.
2. In each iteration, remove the largest element from the heap, add it to the score, and then reduce its value by dividing it by 3 (rounding up) before pushing it back into the heap.
3. Repeat the process `k` times, as required.

### **Complexity**
- **Time Complexity**: 
  - Constructing the heap takes \\(O(n \\log n)\\), where \\(n\\) is the length of the `nums` list.
  - Each operation of removing the maximum element and reinserting it takes \\(O(\\log n)\\). Since we perform this operation `k` times, the total time complexity is \\(O(k \\log n)\\).
  - The overall time complexity is \\(O((n + k) \\log n)\\).

- **Space Complexity**: \\(O(n)\\), due to the space required for the heap.

---

### **Code Implementations**


```dart []
import 'package:collection/collection.dart';

class Solution {
  int maxKelements(List<int> nums, int k) {
    final maxHeap = HeapPriorityQueue<int>((a, b) => b.compareTo(a));
    maxHeap.addAll(nums);

    int score = 0;

    while (k > 0) {
      final val = maxHeap.removeFirst();
      score += val;
      maxHeap.add((val / 3).ceil());
      k--;
    }

    return score;
  }
}
```


```python []
import heapq
import math

class Solution:
    def maxKelements(self, nums: List[int], k: int) -> int:
        # Max heap in Python using negative values
        max_heap = [-num for num in nums]
        heapq.heapify(max_heap)

        score = 0
        while k > 0:
            val = -heapq.heappop(max_heap)
            score += val
            heapq.heappush(max_heap, -math.ceil(val / 3))
            k -= 1

        return score
```


```java []
import java.util.PriorityQueue;

class Solution {
    public int maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        for (int num : nums) {
            maxHeap.add(num);
        }

        int score = 0;
        while (k > 0) {
            int val = maxHeap.poll();
            score += val;
            maxHeap.add((int) Math.ceil(val / 3.0));
            k--;
        }

        return score;
    }
}
```


```cpp []
#include <queue>
#include <cmath>

class Solution {
public:
    int maxKelements(vector<int>& nums, int k) {
        priority_queue<int> maxHeap(nums.begin(), nums.end());

        int score = 0;
        while (k-- > 0) {
            int val = maxHeap.top();
            maxHeap.pop();
            score += val;
            maxHeap.push(ceil(val / 3.0));
        }

        return score;
    }
};
```



```javascript []
class Solution {
    maxKelements(nums, k) {
        let maxHeap = new MaxPriorityQueue({ priority: x => x });
        nums.forEach(num => maxHeap.enqueue(num));

        let score = 0;
        while (k > 0) {
            let val = maxHeap.dequeue().element;
            score += val;
            maxHeap.enqueue(Math.ceil(val / 3));
            k--;
        }

        return score;
    }
}
```


```go []
package main

import (
	"container/heap"
	"math"
)

type MaxHeap []int

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MaxHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *MaxHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func maxKelements(nums []int, k int) int {
	h := &MaxHeap{}
	heap.Init(h)
	for _, num := range nums {
		heap.Push(h, num)
	}

	score := 0
	for k > 0 {
		val := heap.Pop(h).(int)
		score += val
		heap.Push(h, int(math.Ceil(float64(val) / 3)))
		k--
	}

	return score
}
```


```c []
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef struct {
    int *data;
    int size;
} MaxHeap;

void maxHeapify(MaxHeap* heap, int i) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < heap->size && heap->data[left] > heap->data[largest])
        largest = left;

    if (right < heap->size && heap->data[right] > heap->data[largest])
        largest = right;

    if (largest != i) {
        int temp = heap->data[i];
        heap->data[i] = heap->data[largest];
        heap->data[largest] = temp;
        maxHeapify(heap, largest);
    }
}

int extractMax(MaxHeap* heap) {
    int max = heap->data[0];
    heap->data[0] = heap->data[--heap->size];
    maxHeapify(heap, 0);
    return max;
}

void insertMaxHeap(MaxHeap* heap, int val) {
    heap->data[heap->size++] = val;
    for (int i = heap->size / 2 - 1; i >= 0; i--)
        maxHeapify(heap, i);
}

int maxKelements(int* nums, int numsSize, int k) {
    MaxHeap heap = {nums, numsSize};

    for (int i = numsSize / 2 - 1; i >= 0; i--)
        maxHeapify(&heap, i);

    int score = 0;
    while (k-- > 0) {
        int val = extractMax(&heap);
        score += val;
        insertMaxHeap(&heap, (int)ceil(val / 3.0));
    }

    return score;
}
```
![image.png](./images/1.png) {:style='width:250px'}


