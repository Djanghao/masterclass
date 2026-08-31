# go

**Author:** xy01
**Votes:** 1
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/3319262/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/3319262/)

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
func getNoZeroIntegers(n int) []int {
	for A := 1; A < n; A++ {
		B := n - A
		if !strings.Contains(strconv.Itoa(A)+strconv.Itoa(B), "0") {
			return []int{A, B}
		}
	}
    return []int{}
}
```