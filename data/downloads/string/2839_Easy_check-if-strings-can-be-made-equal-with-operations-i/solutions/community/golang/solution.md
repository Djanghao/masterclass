# Go | Easy to understand | Beats 100%

**Author:** dimaglushkov
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3993885/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3993885/)

---

# Approach
Just trying all of the possible combinations

# Code
```
func swap(s string, i, j int) string {
	b := []byte(s)
	b[i], b[j] = b[j], b[i]

	return string(b)
}

func canBeEqual(s1 string, s2 string) bool {
	return s1 == s2 || 
		swap(s1, 0, 2) == s2 || 
		swap(s1, 1, 3) == s2 || 
		swap(swap(s1, 0, 2), 1, 3) == s2
}

```