# [Golang] Binary Search + Greedy + Priority Queue

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4784349/](https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4784349/)

---

This is based on several other solutions that are already posted but it was a little hard for me to understand the logic so I've added some more comments that might help others similar to me understand better.

# Code
```
type PriorityQueue []int

func (pq PriorityQueue) Len() int           { return len(pq) }
func (pq PriorityQueue) Less(i, j int) bool {
  return pq[i] < pq[j]
}
func (pq PriorityQueue) Swap(i, j int)      { pq[i], pq[j] = pq[j], pq[i] }

func (pq *PriorityQueue) Push(x interface{}) {
  *pq = append(*pq, x.(int))
}

func (pq *PriorityQueue) Pop() interface{} {
  var item interface{}
  n := len(*pq)
  *pq, item = (*pq)[:n-1], (*pq)[n-1]
  return item
}

func (pq PriorityQueue) Top() interface{} {
  return pq[0]
}

func earliestSecondToMarkIndices(nums []int, changeIndices []int) int {
  // We'll first compute the maximum number of operations (worst case) to mark all indices.
  // We'll need nums[i] + 1 operations for each i. nums[i] decrements and then another op
  // for marking the index. We'll then use this information to determine how much we can
  // benefit by the zero-ability to make an index 0.
  var ops int
  n, m := len(nums), len(changeIndices)
  for i := 0; i < n; i++ {
    ops += nums[i] + 1
  }
  // We're using binary search to find the earliest second.
  left, right := 1, m
  res := -1
  for left <= right {
    mid := left + (right - left)/2
    if canMarkAll(nums, changeIndices, mid, ops) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
}

func canMarkAll(nums, changeIndices []int, end int, ops int) bool {
  seen := make(map[int]struct{})
  taken := make(map[int]bool)
  // We go from left to right and mark the first time we see an index in changeIndices
  // This is a potential for making that index to zero. And we make a note of that index
  // in changeIndices so we can use other indices for free operations.
  for i := 0; i < end; i++ {
    if _, ok := seen[changeIndices[i]]; !ok && nums[changeIndices[i]-1] > 0 {
      seen[changeIndices[i]] = struct{}{}
      taken[i] = true
    }
  }
  // We want the priority queue to contain the highest valued indices that can be
  // zeroed and marked at a later time. We only add to priority queue if we can use the
  // zero operation.
  var pq PriorityQueue
  var free int
  for i := end-1; i >= 0; i-- {
    if !taken[i] {
      // We haven't taken this index, we have one more free operation that we can use for either
      // marking an index or decrement an index.
      free++
    } else {
      // We've taken this index, so let's push it to PQ
      heap.Push(&pq, nums[changeIndices[i]-1])
      if free > 0 {
        // We have at least one free operation, let's use it to mark the index
        free--
      } else {
        // We don't have a free operation available so let's give up the smallest valued
        // index that we've already added to pq. As a result of this, we have two more free operations:
        // 1. The index that can be used to perform an operation
        // 2. We already claimed a free operation for that marking
        // Since we've just pushed one we ned one free slot so we just increase by 1.
        // Or if we only have the currently pushed item in pq, we just pop that back and use
        // this slot as a free operation. Either way, it checks out.
        free++
        heap.Pop(&pq)
      }
    }
  }
  // Let's remove the ops needed for the ones on the priority queue.
  // These are already handled by the zero operation and we already accounted for their marking.
  for pq.Len() > 0 {
    ops -= pq.Top().(int)
    heap.Pop(&pq)
    ops--
  }
  // Now ops only contains the remaining indices that need to be decremented and marked with some free
  // operations.
  return ops <= free
}
```