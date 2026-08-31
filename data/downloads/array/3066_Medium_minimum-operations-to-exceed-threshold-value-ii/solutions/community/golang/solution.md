# Using MinHeap method Easy and Fast

**Author:** varghese-noble
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4820954/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/solutions/4820954/)

---

# Intuition
The idea is to get the min value after each operation and check the value against the given "k" value.
The min value is obtained using a minHeap which takes O(logn)

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
- Building the heap: The time complexity of building the heap takes O(nLogn)
- Pop and Insert: This takes O(logn)
- Overall takes O(nlogn), since these operations are executed within the loop, their time complexity contribution depends on the number of iterations of the loop which can be atmost n times.

- Space complexity:
O(1) as no extra space is being utilised.

# Code
```
func minOperations(nums []int, k int) int {
	if len(nums) < 2 {
		return 0
	}
	count := 0
    h := MinHeap(nums)
    h.buildHeap()
	for h.length()>=2{
        f := h.pop()
        if f >= k {
            return count
        }
        s := h.pop()
		val := min(f, s)*2 + max(f, s)
		h.insert(val)
        count++
	}
    if h.peek() >= k {
        return count
    }
	return count + 1
}

type MinHeap []int

func (h *MinHeap)length() int{
    return len(*h)
}

// Fetches the first element or the min value of the heap
func (h *MinHeap)peek() int{
    return (*h)[0]
}

func (h *MinHeap) swap(a, b int) {
    (*h)[a], (*h)[b] = (*h)[b], (*h)[a]
}

func (h *MinHeap) insert(val int) {
    (*h) = append(*h, val)
    h.siftUp()
}

// Pops the minimum value in the heap
func (h *MinHeap)pop() int{
    h.swap(0, len(*h)-1)
    val := (*h)[len(*h)-1]
    (*h) = (*h)[:len(*h)-1]
    h.siftDown(0, len(*h)-1)
    return val
}

func (h *MinHeap) buildHeap() {
    n := len(*h)
    for i:= n-1/2 ; i>=0; i-- {
        h.siftDown(i, n-1)
    }
}

func (h *MinHeap) siftUp() {
    curr := len(*h) - 1
    parent := (curr-1)/2
    for curr >= 0 && (*h)[curr] < (*h)[parent] {
        h.swap(curr, parent)
        curr = parent
        parent = (curr-1)/2
    }
}

func (h *MinHeap)siftDown(start, end int) {
    smallest := start
    left := 2*start + 1
    right := 2*start + 2
    if left <=end && (*h)[left] < (*h)[smallest] {
        smallest = left
    }
    if right <= end && (*h)[right] < (*h)[smallest] {
        smallest = right
    }

    if smallest != start {
        h.swap(smallest, start)
        h.siftDown(smallest, end)
    }
}
```