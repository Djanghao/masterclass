# Golang 156 ms 10.9 MB

**Author:** maxhero90
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3347082/](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/solutions/3347082/)

---

# Complexity
- Time complexity: $$O((n+m)*logn)$$
- Space complexity: $$O(n+m)$$
# Code
```
func minOperations(nums []int, queries []int) []int64 {
	n := len(nums)
	sort.Ints(nums)
	prefixSums := make([]int, n)
	prefixSums[0] = nums[0]
	for i := 1; i < n; i++ {
		prefixSums[i] = prefixSums[i-1] + nums[i]
	}
	result := make([]int64, len(queries))
	for i, query := range queries {
		idx := sort.SearchInts(nums, query)
		if idx == 0 {
			result[i] = int64(prefixSums[n-1] - query*n)
		} else {
			result[i] = int64(prefixSums[n-1] - query*(n-idx) + query*idx - prefixSums[idx-1]<<1)
		}
	}
	return result
}
```