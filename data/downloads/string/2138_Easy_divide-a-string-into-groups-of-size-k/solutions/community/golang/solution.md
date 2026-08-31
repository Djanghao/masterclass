# Go

**Author:** namashin
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/3246332/](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/solutions/3246332/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(n)
# Code
```
func divideString(s string, k int, fill byte) []string {
	result := make([]string, 0)

	for i := 0; i < len(s); i += k {
		var subString string

		if i+k < len(s) {
			subString = s[i : i+k]
		} else {
			subString = s[i:] + strings.Repeat(string(fill), k-len(s[i:]))
		}

		result = append(result, subString)
	}

	return result
}
```