# Count Substrings That Differ By One Character

**Author:** ShaksRA
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5717534/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/5717534/)

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
func countSubstrings(s string, t string) (ans int) {
	m, n := len(s), len(t)
	for i, a := range s {
		for j, b := range t {
			if a != b {
				l, r := 0, 0
				for i > l && j > l && s[i-l-1] == t[j-l-1] {
					l++
				}
				for i+r+1 < m && j+r+1 < n && s[i+r+1] == t[j+r+1] {
					r++
				}
				ans += (l + 1) * (r + 1)
			}
		}
	}
	return
}
```