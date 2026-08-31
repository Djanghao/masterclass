# [Golang] stack & min-healp solutions with explanation

**Author:** cwc123
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/952996/](https://leetcode.com/problems/find-the-most-competitive-subsequence/solutions/952996/)

---

My first intuition is to find lexicographical order from provided numbers.

e.g. nums = [2, 4, 3, 3, 5, 4, 9, 6], k = 4

Select smallest possible numbers to form a non-decreasing sequences is [2, 3, 3, 4, 6], truncate to size k gets answer [2, 3, 3, 4].

But the problem is, best non-decreasing subsequences might not fit into k size, take nums = [8, 9, 5, 6, 7, 4, 5], k = 3 as an example.

Smallest non-decreasing subsequences is [4, 5], which is not enough for form answer with size 3.

The trick is to use another vairable `toRemove`, denotes how many numbers can be removed. The reason to use this is because, lexicographical order means select smallest possible, and if one number is smaller than the other, afterwards numbers don't care.

If previous smallest numbers are selected still not satisfies size k, then remaining numbers should be all selected to form answer.

To find smallest non-decreasing sequences, `stack` can be used: poping nuber larger than next number until no numbers should be popped. Take nums = [2, 4, 3, 3, 5, 4, 9, 6], k = 4 as an example.

```
1. [2, 4, 3, 3, 5, 4, 9, 6]
    ^
    stack: [2]

2. [2, 4, 3, 3, 5, 4, 9, 6]
       ^
   4 > last number of stack (2), pushing
   stack: [2, 4]

3. [2, 4, 3, 3, 5, 4, 9, 6]
          ^
   3 < last number of stack (4), poping
   3 > last number of stack (2), pushing
   stack: [2, 3]

4. [2, 4, 3, 3, 5, 4, 9, 6]
             ^
   3 == last number of stack (3), pushing
   stack: [2, 3, 3]

5. [2, 4, 3, 3, 5, 4, 9, 6]
                ^
   5 > last number of stack (3), pushing
   stack: [2, 3, 3, 5]

6. [2, 4, 3, 3, 5, 4, 9, 6]
                   ^
   4 < last number of stack (5), poping
   4 > last number of stack (3), pushing
   stack: [2, 3, 3, 4]

7. [2, 4, 3, 3, 5, 4, 9, 6]
                      ^
   9 > last number of stack (4), pushing
   stack: [2, 3, 3, 4, 9]

8. [2, 4, 3, 3, 5, 4, 9, 6]
                         ^
   6 < last number of stack (9), poping
   6 > last number of stack (4), pushing
   stack: [2, 3, 3, 4, 6]
```

Time complexity to use stack to solve this problem is O(n)

```golang
func mostCompetitive(nums []int, k int) []int {
    size := len(nums)
    toRemove := size-k
    stack := make([]int, 0)

    for i := range nums {
        for len(stack) > 0 && toRemove > 0 && stack[len(stack)-1] > nums[i] {
            toRemove--
            stack = stack[:len(stack)-1]
        }

        stack = append(stack, nums[i])
    }

    return stack[:k]
}
```

Another solution is to solve by selecting smallest possible from min-heap. To make sure there are enough numbers to form answer, pushing `size-k+1` numbers into min-heap, each time select smallest from heap and push next remaining number.

The reason this works is because, every iteration selects one number and pushing next number from `nums`, and there will guarantee enough numbers to select.

```golang
type MinHeap [][]int

func (h MinHeap) Len() int { return len(h) }

// same number, smaller index first
func (h MinHeap) Less(i, j int) bool {
	if h[i][0] == h[j][0] {
		return h[i][1] < h[j][1]
	}
	return h[i][0] < h[j][0]
}

func (h MinHeap) Swap(i, j int) { h[i], h[j] = h[j], h[i] }
func (h MinHeap) Peek() []int   { return h[0] }

func (h *MinHeap) Push(x interface{}) {
	*h = append(*h, x.([]int))
}

func (h *MinHeap) Pop() interface{} {
	old := *h
	n := len(old)
	x := old[n-1]
	*h = old[0 : n-1]
	return x
}

func mostCompetitive1(nums []int, k int) []int {
	size := len(nums)

	h := &MinHeap{}
	heap.Init(h)

	// push size-k numbers into heap, make sure selecting
	// from smallest, and at least remaining numbers are
	// sufficient to form answers with k remaining numbers
	var i int
	for i = 0; i <= size-k; i++ {
		heap.Push(h, []int{nums[i], i})
	}

	ans := make([]int, 0)
	prev := -1

	for len(ans) < k {
		// remove numbers before selected ones
		// because smallest is selected, all previous
		// larger should be removed
		for h.Len() > 0 && h.Peek()[1] < prev {
			heap.Pop(h)
		}

		p := heap.Pop(h).([]int)

		if i < size {
			heap.Push(h, []int{nums[i], i})
			i++
		}

		ans = append(ans, p[0])
		prev = p[1]
	}

	return ans
}
```