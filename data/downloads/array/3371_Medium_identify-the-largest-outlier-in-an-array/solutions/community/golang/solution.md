# Easy Go Solution | Using Map

**Author:** UAMALIK
**Votes:** 1
**Link:** [https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6101432/](https://leetcode.com/problems/identify-the-largest-outlier-in-an-array/solutions/6101432/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func getLargestOutlier(nums []int) int {
    mp := make(map[int]int) // Frequency map
	total := 0             // Sum of all numbers
	for _, it := range nums {
		mp[it]++
		total += it
	}

	ans := math.MinInt // Smallest possible integer
	for _, it := range nums {
		// Temporarily reduce the count of the current number
		mp[it]--
		if mp[it] == 0 {
			delete(mp, it) // Remove the key if count is 0
		}

		cur := total - it // Current sum excluding `it`

		// Check if `cur` is even and `cur/2` exists in the map
		if cur%2 == 0 {
			if _, exists := mp[cur/2]; exists {
				if it > ans {
					ans = it // Update the answer if `it` is greater
				}
			}
		}

		// Restore the original count of `it`
		mp[it]++
	}
    return ans
}
```