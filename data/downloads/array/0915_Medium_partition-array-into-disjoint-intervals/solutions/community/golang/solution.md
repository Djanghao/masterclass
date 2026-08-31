# Golang 128 ms 8 MB

**Author:** maxhero90
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/2757628/](https://leetcode.com/problems/partition-array-into-disjoint-intervals/solutions/2757628/)

---

```
func min(a, b int32) int32 {
	if a <= b {
		return a
	}
	return b
}

func max(a, b int32) int32 {
	if a >= b {
		return a
	}
	return b
}

func partitionDisjoint(nums []int) int {
	mins := make([]int32, len(nums)-1)
	mins[len(nums)-2] = int32(nums[len(nums)-1])
	for i := len(nums) - 2; i > 0; i-- {
		mins[i-1] = min(mins[i], int32(nums[i]))
	}

	for curMax, i, iEnd := int32(0), 0, len(nums)-1; i < iEnd; i++ {
		curMax = max(curMax, int32(nums[i]))
		if curMax <= mins[i] {
			return i + 1
		}
	}
	return len(nums) - 1
}
```