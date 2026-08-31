# easy one xd

**Author:** shellpy03
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3685959/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/3685959/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
func maximumNumberOfStringPairs(words []string) int {
	st := make(map[string]bool)
	res := 0
	for _, i := range words {
		s := i
		i = reverseString(i)
		if !st[i] {
			st[s] = true
		} else {
			res++
		}
	}
	return res
}

func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
```