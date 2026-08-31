# [ Go Solution ] Great explanation and Full Description

**Author:** sansaian
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/4956877/](https://leetcode.com/problems/minimum-operations-to-halve-array-sum/solutions/4956877/)

---

# Problem Statement
Given an array of integers `nums`, each operation consists of removing any element from `nums`, dividing it by two, and inserting the resulting half back into `nums`. The goal is to perform the minimum number of operations so that the sum of `nums` is reduced to at least half of its original value. Return the minimum number of operations required to achieve this.

## Approach
The solution employs a max heap to efficiently retrieve and halve the largest element in `nums` at each step, ensuring the sum is reduced as quickly as possible towards the target (half of the original sum).
1. Calculate the target sum, which is half of the original sum of `nums`.
2. Initialize a max heap and add all elements from `nums` to it.
3. Repeatedly pop the largest element from the heap, halve it, and add the half back into the heap until the accumulated sum of halved values meets or exceeds the target.

### Steps
1. Initialize the target sum as half of the total sum of the array `nums`.
2. Create and fill a max heap with the elements of `nums`.
3. Initialize an accumulated sum `sum` of halved values and an operation counter `ops`.
4. While `sum` is less than the target:
   - Increment `ops`.
   - Pop the largest element from the heap, halve it, add the half to `sum`, and push the half back into the heap.
5. Return `ops` as the minimum number of operations required.

## Complexity Analysis
- **Time Complexity**: O(n + k*log(n)), where `n` is the number of elements in `nums` and `k` is the number of operations required. Initializing the heap takes O(n), and each of the `k` operations involves popping and pushing to the heap, each of which is O(log(n)).
- **Space Complexity**: O(n), as we store all elements in the heap.

# Code
```go
import "container/heap"

type MaxHeap []float64

func (h MaxHeap) Len() int           { return len(h) }
func (h MaxHeap) Less(i, j int) bool { return h[i] > h[j] }
func (h MaxHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MaxHeap) Push(x interface{}) {
	*h = append(*h, x.(float64))
}

func (h *MaxHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func halveArray(nums []int) int {
	var target float64
	h := &MaxHeap{}
	heap.Init(h)
	for _, num := range nums {
		val := float64(num)
		target += val
		heap.Push(h, val)
	}
	target /= 2

	var sum float64
	ops := 0
	for sum < target {
		ops++
		largest := heap.Pop(h).(float64)
		half := largest / 2
		sum += half
		heap.Push(h, half)
	}
	return ops
}