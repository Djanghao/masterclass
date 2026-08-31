# Easy to understand

**Author:** Indomie
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077566/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6077566/)

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
func isPossibleToRearrange(s string, t string, k int) bool {
	var (
		n     = len(s)
		count = make(map[string]int)
	)

	k = n / k

	for i := k - 1; i < n; i += k {
		sub1, sub2 := s[i-k+1:i+1], t[i-k+1:i+1]
		count[sub1]++
		count[sub2]--

		if val, ok := count[sub1]; ok && val == 0 {
			delete(count, sub1)
		}

		if val, ok := count[sub2]; ok && val == 0 {
			delete(count, sub2)
		}
	}

	return len(count) == 0
}

```