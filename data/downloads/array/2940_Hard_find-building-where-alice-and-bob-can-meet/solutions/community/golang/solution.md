# Go Solution | Monotonic Stack + Binary Search

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/5615491/](https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/solutions/5615491/)

---

# Complexity
- Time complexity: $$O(n+m\	ext{log}n)$$, where $m$ and $n$ are the length of `queries` and `heights`.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m+n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type pair struct{ height, index int }

func leftmostBuildingQueries(heights []int, queries [][]int) []int {
	ans := make([]int, len(queries))
	qs := make([][]pair, len(heights))
	for i, query := range queries {
		a, b := query[0], query[1]
		if a > b {
			a, b = b, a // Ensure that Bob is never at the left side
		}
		if a == b || heights[a] < heights[b] { // If both people are at the same location or Alice is lower than Bob, then Alice can simply jumped to Bob's position
			ans[i] = b
		} else {
			qs[b] = append(qs[b], pair{heights[a], i})
		}
	}
	var stack []int // Monotonic stack, the top of the stack has the lowest height
	for i := len(heights) - 1; i >= 0; i-- {
		for _, q := range qs[i] {
			j := sort.Search(len(stack), func(i int) bool { return heights[stack[i]] <= q.height }) - 1 // Binary search the first building on the right side of Bob which is higher than Alices's
			if j == -1 {                                                                                // No such building exists
				ans[q.index] = -1
			} else {
				ans[q.index] = stack[j]
			}
		}
		for len(stack) > 0 && heights[i] >= heights[stack[len(stack)-1]] { // Update the stack
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, i)
	}
	return ans
}
```