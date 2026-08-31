# Golang O(n) solution

**Author:** tjucoder
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3988985/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3988985/)

---

# Code
```go
func smallestString(s string) string {
	start := -1
	end := -1
	for i, c := range s {
		if start == -1 {
			if c != 'a' {
				start = i
				end = i
			}
		} else {
			if c == 'a' {
				break
			}
			end = i
		}
	}
	result := []rune(s)
	if start != -1 {
		for i, v := range result {
			if i >= start && i <= end {
				result[i] = v-1
			}
		}
		return string(result)
	}
	result[len(s)-1] = 'z'
	return string(result)
}
```