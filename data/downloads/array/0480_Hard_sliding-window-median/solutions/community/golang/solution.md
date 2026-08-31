# Median of Sliding Window  Time: O(nlogk) Space: O(k)

**Author:** dibekpoudyal
**Votes:** 1
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/5059649/](https://leetcode.com/problems/sliding-window-median/solutions/5059649/)

---

**Explanation:**
- The function `medianSlidingWindow` finds the median of a sliding window of size `k` in an array of integers `nums`.
- It maintains two heaps: a max heap to store the smaller half of the window elements and a min heap to store the larger half.
- As the window slides, the algorithm adjusts the heaps to ensure that they contain the correct elements for finding the median efficiently.
- At each step, it calculates the median based on the top elements of the heaps.
- The algorithm removes the elements leaving the sliding window and rebalances the heaps accordingly.

**Step-by-Step:**
1. Initialize an empty min heap (`minHeap`) and an empty max heap (`maxHeap`) to store elements of the sliding window.
2. Iterate through the array `nums`.
3. For each element `num` in `nums`, add it to the appropriate heap based on its value relative to the top element of `maxHeap`.
4. Balance the heaps if necessary to maintain the property that the size of `maxHeap` is either equal to or one greater than the size of `minHeap`.
5. If the window size reaches or exceeds `k`:
   - Calculate the median:
     - If the sizes of `maxHeap` and `minHeap` are equal, the median is the average of the top elements of both heaps.
     - Otherwise, the median is the top element of `maxHeap`.
   - Remove the element leaving the sliding window from the respective heap.
   - Rebalance the heaps if necessary after removal.
6. Return the array of medians.

**Time Complexity:**
- Each insertion and removal operation on the heaps takes O(logk) time, where k is the size of the heap.
- Since we iterate through the array once and perform operations on heaps for each element, the overall time complexity is O(nlogk), where n is the number of elements in `nums`.

**Space Complexity:**
- The space complexity is O(k) because we maintain two heaps of size k to represent the sliding window.

# Code
```
import (
    "container/heap"
)

type MinHeap []int
func (h MinHeap) Len() int {
    return len(h)
}
func (h MinHeap) Less(i, j int) bool {
    return h[i] < h[j]
}
func (h MinHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}
func (h MinHeap) Peek() int {
    return h[0]
}
func (h *MinHeap) Push(value interface{}) {
    *h = append(*h, value.(int))
}
func (h *MinHeap) Pop() interface{} {
    old := *h
    n := len(old)
    popped := old[n - 1]
    *h = old[0:n-1]
    return popped
}

type MaxHeap []int
func (h MaxHeap) Len() int {
    return len(h)
}
func (h MaxHeap) Less(i, j int) bool {
    return h[i] > h[j]
}
func (h MaxHeap) Swap(i, j int) {
    h[i], h[j] = h[j], h[i]
}
func (h MaxHeap) Peek() int {
    return h[0]
}
func (h *MaxHeap) Push(value interface{}) {
    *h = append(*h, value.(int))
}
func (h *MaxHeap) Pop() interface{} {
    old := *h
    n := len(old)
    popped := old[n - 1]
    *h = old[0:n-1]
    return popped
}

func medianSlidingWindow(nums []int, k int) []float64 {
    medians := make([]float64, 0)

    // small: max heap, large: min heap
    smallList, largeList := &MaxHeap{}, &MinHeap{}
    heap.Init(smallList)
    heap.Init(largeList)

    // to track popped value so that we don't really pop out every time
    outgoingNum := make(map[int]int, 0)

    // init smallList
    for i := 0; i < k; i++ {
        heap.Push(smallList, nums[i])
    }

    // transfer half parts to largeList
    half := (k >> 1)
    for i := 0; i < half; i++ {
        heap.Push(largeList, heap.Pop(smallList).(int))
    }
    

    i := k
    isOdd := (k & 1) == 1
    // to track the balance of two heaps
    balance := 0
    for {
        if isOdd {
            medians = append(medians, float64(smallList.Peek()))
        } else {
            medians = append(medians, float64(smallList.Peek() + largeList.Peek()) * 0.5)
        }

        if i >= len(nums) {
            break
        }

        in := nums[i]
        out := nums[i - k]
        // for next loop
        i++

        if out <= smallList.Peek() {
            balance--
        } else {
            balance++
        }

        outgoingNum[out]++

        if in <= smallList.Peek() {
            heap.Push(smallList, in)
            balance++
        } else {
            heap.Push(largeList, in)
            balance--
        }

        // rebalance
        if balance > 0 {
            heap.Push(largeList, heap.Pop(smallList).(int))
        } else if balance < 0 {
            heap.Push(smallList, heap.Pop(largeList).(int))
        }

        balance = 0;

        // remove invalid num from heaps
        for outgoingNum[smallList.Peek()] > 0 {
            popped := heap.Pop(smallList).(int)
            outgoingNum[popped]--
        }
        for largeList.Len() > 0 && outgoingNum[largeList.Peek()] > 0 {
            popped := heap.Pop(largeList).(int)
            outgoingNum[popped]--
        }
    }

    return medians
}
```