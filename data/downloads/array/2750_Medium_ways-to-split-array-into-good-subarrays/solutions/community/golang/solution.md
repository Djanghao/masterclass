# Golang simple solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3954977/](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/solutions/3954977/)

---

# Code
```go
func numberOfGoodSubarraySplits(nums []int) int {
	last1 := -1
	total := 1
	for i, v := range nums {
		if v == 1 {
			if last1 == -1 {
				last1 = i
				continue
			}
			count0 := i - last1
			total = (total * count0) % 1000000007
			last1 = i
		}
	}
	if last1 == -1 {
		return 0
	}
	return total
}
```