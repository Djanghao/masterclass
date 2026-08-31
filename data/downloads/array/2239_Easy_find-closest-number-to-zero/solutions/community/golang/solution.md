# Go

**Author:** namashin
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-closest-number-to-zero/solutions/3154753/](https://leetcode.com/problems/find-closest-number-to-zero/solutions/3154753/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
# Code
```
func findClosestNumber(nums []int) int {
	result := -math.MaxInt
	minAbs := math.MaxInt

	for _, num := range nums {
		absNum := int(math.Abs(float64(num)))

		if absNum == minAbs {
			result = max(result, num)
		} else if absNum < minAbs {
			minAbs = absNum
			result = num
		}
	}

	return result
}
```