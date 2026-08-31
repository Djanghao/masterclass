# Beats 100% space and time-go (Super Easy)

**Author:** sachdevlaksh
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5432856/](https://leetcode.com/problems/alternating-groups-ii/solutions/5432856/)

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
```
func numberOfAlternatingGroups(colors []int, k int) int {
	count := 1
	colors = append(colors, colors[:k-1]...)
    l := 1
    res := 0
	for l < len(colors) {
		if colors[l] != colors[l-1] {
            count++
		} else {
			count = 1
		}
        if count >= k{
            res++
        }
        l++
	}

	return res
}
```