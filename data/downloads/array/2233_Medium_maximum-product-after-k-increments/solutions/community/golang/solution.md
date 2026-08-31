# Go / GoLang | Heap / Priority Query

**Author:** aristorinjuang
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1932638/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1932638/)

---

# Intuition
1. Cast the input to a heap or priority queue.
2. Increment the minimum number.
3. Iterate and calculate the heap with a module to avoid TLE. We don't need to pop the heap for time-saving.

# Approach
<!-- Describe your approach to solving the problem. -->
Heap / Priority Queue

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n + k)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
import "container/heap"


type IntHeap []int

func (h IntHeap) Len() int { return len(h) }
func (h IntHeap) Less(i, j int) bool { return h[i] < h[j] }
func (h IntHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h *IntHeap) Push(x any) { *h = append(*h, x.(int)) }
func (h *IntHeap) Pop() any {
    x := (*h)[len(*h) - 1]
    *h = (*h)[:len(*h) - 1]

    return x
}


func maximumProduct(nums []int, k int) int {
    h := IntHeap(nums)

    heap.Init(&h)

    for i := 0; i < k; i++ {
        heap.Push(&h, heap.Pop(&h).(int) + 1)
    }

    result, mod := h[0], int(1e9 + 7)
    for i := 1; i < h.Len(); i++ {
        result = (result * h[i]) % mod
    }

    return result
}
```