# Golang - deque with explanation

**Author:** pug_jotaro_is_not_real
**Votes:** 8
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/693349/](https://leetcode.com/problems/sliding-window-maximum/solutions/693349/)

---

```
type deque struct {
	indexes []int
}

func (d *deque) push(i int) {
	d.indexes = append(d.indexes, i)
}

func (d *deque) getFirst() int {
	return d.indexes[0]
}

func (d *deque) popFirst() {
	d.indexes = d.indexes[1:]
}

func (d *deque) getLast() int {
	return d.indexes[len(d.indexes)-1]
}

func (d *deque) popLast() {
	d.indexes = d.indexes[:len(d.indexes)-1]
}

func (d *deque) empty() bool {
	return 0 == len(d.indexes)
}

// This problem can be solved nicely using a deque. A deque is a queue that allows to systematically access and/or
// remove elements from either the top or the bottom of it.
// Now, first of all, we will have n-k+1 results as the number of windows. If input has length 3 and k is 1, we'll have
// 3 - 1 + 1 = 3 windows. Now, for the approach, we use a deque that will store the index of the numbers. We store
// the index rather than the value to understand if an element is out of the current i-k window. We loop through the
// numbers, for each one of them, we remove from the queue the top if it's outside the current window - we do this only
// once per iteration as the index increases linearly. After that, we remove every element from the deque that is
// smaller than the current analysed element. This will leave the current maximum at the top of the queue. We push the
// current element into the deque for future iterations. Finally, if we reached the first window end, we add our current
// result, this will be at the top of the deque.
//
// This video by Jessica Lin has an amazing explanation - https://www.youtube.com/watch?v=fbkvdWUS5Ic
//
// T: O(n)
// S: O(n-k+1)
func maxSlidingWindow(nums []int, k int) []int {
	if len(nums) < k || 0 == k {
		return make([]int, 0)
	} else if 1 == k {
		return nums
	}

	var (
		// len(nums)-k+1 this is the number of windows.
		// If input has length 3 and k is 1, we'll have 3 - 1 + 1 = 3 windows.
		res = make([]int, len(nums)-k+1)
		dq  = &deque{}
	)

	for i := range nums {
		// we pop the first element if it's outside of the current window.
		if false == dq.empty() && (i-k == dq.getFirst()) {
			dq.popFirst()
		}

		// we pop all the elements that are smaller than the current one.
		for false == dq.empty() && nums[dq.getLast()] < nums[i] {
			dq.popLast()
		}

		// we push the current one to the window.
		dq.push(i)

		// if we reached at least the first window end.
		if i >= k-1 {
			// we add the current result that is the first in the deque.
			res[i-k+1] = nums[dq.getFirst()]
		}
	}

	return res
}
```