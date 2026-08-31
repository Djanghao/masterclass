# [Golang] Using single MinHeap

**Author:** vasakris
**Votes:** 9
**Link:** [https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3564644/](https://leetcode.com/problems/total-cost-to-hire-k-workers/solutions/3564644/)

---

# Complexity
- Time complexity:
O(ClogC) + O(ClogC) + O(Klogc) -> O((C+K) logC)

- Space complexity:
O(C) + O(C) -> O(C)

# Code
```
func totalCost(costs []int, k int, candidates int) int64 {
    minHeap := &MinHeap{}

    // Add first candidates to heap
    for i := 0; i < candidates; i++ {
        heap.Push(minHeap, []int{costs[i], 0})
    }

    // Add last candidates to heap
    for i := max(candidates, len(costs) - candidates); i < len(costs); i++ {
        heap.Push(minHeap, []int{costs[i], 1})
    }

    left, right := candidates, len(costs) - 1 - candidates
    res := 0

    for i := 0; i < k; i++ {
        candidate := heap.Pop(minHeap).([]int)
        res += candidate[0]
        idx := candidate[1]

        if left <= right {
            if idx == 0 {
                heap.Push(minHeap, []int{costs[left], 0})
                left++
            } else {
                heap.Push(minHeap, []int{costs[right], 1})
                right--
            }
        }
    }

    return int64(res)
}

type MinHeap [][]int

func (h MinHeap) Len() int           { return len(h) }

func (h MinHeap) Less(i, j int) bool { 
    if h[i][0] == h[j][0] {
        return h[i][1] < h[j][1] 
    }
    return h[i][0] < h[j][0] 
}

func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }

func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.([]int))
}

func (h *MinHeap) Pop() interface{} {
    x := (*h)[len(*h)-1]
	*h = (*h)[:len(*h)-1]
	return x
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```