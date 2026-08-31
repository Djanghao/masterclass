# [ Go Solution ] Great explanation and Full Description

**Author:** sansaian
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/4973662/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/4973662/)

---

# Problem Statement
Given an array of integers `piles` representing the number of stones in each pile, and an integer `k`, representing the number of operations you can perform, each operation consists of removing half of the stones in any pile (rounding down). The goal is to minimize the total sum of stones in all piles after performing exactly `k` operations.

## Example
- **Input**: piles = [5, 4, 9], k = 2
- **Output**: 12
- **Explanation**: You can perform the following operations:
    1. Remove half of the stones in the third pile: the piles become [5, 4, 4].
    2. Remove half of the stones in the first pile: the piles become [2, 4, 4].
    The total sum of stones in the piles is now 2 + 4 + 4 = 10.

# Approach
The approach involves using a max heap to efficiently find and remove half of the stones from the largest pile at each operation. The algorithm works as follows:
1. Initialize the max heap with the values from `piles`.
2. Sum up all the initial values to get the total sum of stones (`result`).
3. For each of the `k` operations:
   - Pop the largest pile from the heap.
   - Calculate the reduction (half of the largest pile's size, rounded down).
   - Subtract the reduction from the `result`.
   - Push the remainder back into the heap.
4. Return the resulting sum after performing all `k` operations.

### Steps
1. Initialize a max heap and fill it with the numbers from the `piles` array.
2. Initialize `result` to the sum of all elements in `piles`.
3. Perform `k` operations, each time:
   - Removing the largest element from the heap.
   - Reducing it by half (rounded down) and subtracting this amount from `result`.
   - Adding the reduced value back to the heap.
4. Return the modified `result` as the answer.

## Complexity Analysis
- **Time Complexity**: O(k * log(n)), where `n` is the number of elements in `piles`. Each operation involves removing the maximum element from the heap and then adding a new element back, both operations having a time complexity of O(log(n)).
- **Space Complexity**: O(n), which is the space needed to store the elements of `piles` in the heap.

# Code
```go
package main

import (
    "container/heap"
    "fmt"
)

func main() {
    fmt.Println(minStoneSum([]int{5, 4, 9}, 2))
}

func minStoneSum(piles []int, k int) int {
    var result int
    h := &MaxHeap{}
    heap.Init(h)
    for _, num := range piles {
        val := num
        result += val
        heap.Push(h, val)
    }
    for i := 0; i < k; i++ {
        largest := heap.Pop(h).(int)
        reduction := largest / 2
        result -= reduction
        heap.Push(h, largest-reduction)
    }
    return result
}

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