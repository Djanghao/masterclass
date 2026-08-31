# Go easy

**Author:** ganesh_raveendran
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/3917786/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/3917786/)

---



# Code
```
func countPrefixes(words []string, s string) int {
	var count int

	for _, v := range words {
		if strings.HasPrefix(s, v) {
			count++
		}
	}

	return count
}
```