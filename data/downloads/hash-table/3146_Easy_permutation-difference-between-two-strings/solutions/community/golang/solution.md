# )

**Author:** Elmir14
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5877955/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5877955/)

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
func findPermutationDifference(s string, t string) int {

	m := make(map[string]int, len(s))

	for i, word := range s {
		m[string(word)] = i
	}
	res := 0

	for i, word := range t {
		indx, _ := m[string(word)]
		sum := indx - i
		if sum < 0 {
			sum = -sum
		}
		res += sum
	}

	return res
}
```