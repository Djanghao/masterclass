# Easy Solution In GO

**Author:** robinjoseph1998
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/5172286/](https://leetcode.com/problems/longest-uncommon-subsequence-ii/solutions/5172286/)

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
func findLUSlength(strs []string) int {
	sort.Slice(strs, func(i, j int) bool {
		return len(strs[i]) > len(strs[j])
	})
	for i, v := range strs {
		isUncommon := true
		for j, eac := range strs {
			if i != j && isSubsequence(v, eac) {
				isUncommon = false
				break
			}
		}
		if isUncommon {
			return len(v)
		}
	}
	return -1
}

func isSubsequence(st1, st2 string) bool {
	j := 0
	for i := 0; i < len(st2) && j < len(st1); i++ {
		if st1[j] == st2[i] {
			j++
		}
	}
	return len(st1) == j
}
```