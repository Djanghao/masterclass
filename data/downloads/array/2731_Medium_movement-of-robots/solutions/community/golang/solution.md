# Golang sorting solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/movement-of-robots/solutions/3932542/](https://leetcode.com/problems/movement-of-robots/solutions/3932542/)

---

# Code
```go
func sumDistance(nums []int, s string, d int) int {
	finalPositions := make([]int, 0, len(nums))
	for i, v := range nums {
		switch s[i] {
		case 'L':
			v -= d
		case 'R':
			v += d
		}
		finalPositions = append(finalPositions, v)
	}
	sort.Ints(finalPositions)
	result := 0
	base := finalPositions[0]
	for i := 1; i < len(finalPositions); i++ {
		result = (result + (finalPositions[i] * i) - base) % 1000000007
		base += finalPositions[i]
	}
	return result % 1000000007
}
```