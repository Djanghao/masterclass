# Golang - Beats 100% - Recursion & Explanation

**Author:** pug_jotaro_is_not_real
**Votes:** 13
**Link:** [https://leetcode.com/problems/permutations/solutions/690075/](https://leetcode.com/problems/permutations/solutions/690075/)

---

```
// To solve this problem we can use recursion.
// If we think about it, a combination is valid when it has the same length of the input.
// So, all we need to do is, have a concept of current combination (left) and left items (right)
// that we need to analyse every time. We start with empty current combination and left will be equal to the input.
//
// E.G. current: []; left: [1, 2, 3]
// Then we would have current: [1]; left: [2, 3], current: [2]; left: [1, 3], current: [3]; left: [1, 2]
// 
// The recursion tree looks like:
//
// - ([],[1, 2, 3])
// - ([1],[2,3]); ([2],[1, 3]); ([3],[2, 1])
// - ([1,2],[3]); ([1,3],[2]); ([2,1],[3]); ([2,3],[1]); ([3,2],[1]); ([3,1],[2])
// - ([1,2,3]); ([1,3,2]); ([2,1,3]); ([2,3,1]); ([3,2,1]); ([3,1,2])
//
// T: O(n!)
// S: O(n!)
func permute(nums []int) [][]int {
	var res [][]int
	permuteRec([]int{}, nums, &res)
	return res
}

// We use a pointer for the result so we don't need to worry returning it.
func permuteRec(currComb, left []int, res *[][]int) {
	// We know that we found a new combination when we have no elements left.
	if 0 == len(left) {
		*res = append(*res, currComb)
		return
	}
	// For the next iteration we consider all the left elements but the current one (idx).
	for idx, l := range left {
		permuteRec(
			append(currComb, l),
			append(append([]int{}, left[:idx]...), left[idx+1:]...), // Make sure to allocate a new slice.
			res,
		)
	}
}
```