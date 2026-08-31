# Clean golang solution | time O(n), space O(n)

**Author:** klakovskiy
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/4954874/](https://leetcode.com/problems/count-complete-subarrays-in-an-array/solutions/4954874/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func countCompleteSubarrays(nums []int) int {
	res, l, freq, uniq := 0, 0, make(map[int]int), make(map[int]struct{})
	for _, n := range nums {
		uniq[n] = struct{}{}
	}
	for r, n := range nums {
		freq[n]++
		for len(uniq) == len(freq) {
			freq[nums[l]]--
			if freq[nums[l]] == 0 {
				delete(freq, nums[l])
			}
			res += len(nums) - r
			l++
		}
	}
	return res
}
```