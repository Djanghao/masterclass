# 3289. The Two Sneaky Numbers of Digitville

**Author:** TkfdYq6AXF
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6120251/](https://leetcode.com/problems/the-two-sneaky-numbers-of-digitville/solutions/6120251/)

---

# Complexity
- Runtime:
1 ms Beats 33.97%

- Memory:
5.09 MB Beats 37.95%

# Code
```golang []
func getSneakyNumbers(nums []int) []int {
	seen := make(map[int]bool)
	var result []int

	for _, valor := range nums {
		if !seen[valor] {
			seen[valor] = true
		} else {
			result = append(result, valor)
		}
	}

	return result
}
```