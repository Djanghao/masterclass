# Golang 148 ms 17.5 MB

**Author:** maxhero90
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3262048/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3262048/)

---

# Complexity
- Time complexity: $$O(n * logn)$$
- Space complexity: $$O(1)$$
# Code
```
func countWays(ranges [][]int) int {
	sort.Slice(ranges, func(i, j int) bool {
		return ranges[i][0] < ranges[j][0]
	})
	result := 2
	for i, end := 1, ranges[0][1]; i < len(ranges); i++ {
		if ranges[i][0] > end {
			end = ranges[i][1]
			result = (result << 1) % 1000000007
		} else if ranges[i][1] > end {
			end = ranges[i][1]
		}
	}
	return result
}
```