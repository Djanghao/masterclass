# Solution in Go

**Author:** fryingsam
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4747093/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-i/solutions/4747093/)

---



# Approach
 Go has built-in functions such as HasPrefix and HasSuffix we can use it


# Code
```
func isPrefixAndSuffix(str1, str2 string) bool {
	return strings.HasPrefix(str2, str1) && strings.HasSuffix(str2, str1)
}

func countPrefixSuffixPairs(words []string) int {
    count := 0
	n := len(words)
	for i := 0; i < n; i++ {
		for j := i + 1; j < n; j++ {
			if isPrefixAndSuffix(words[i], words[j]) {
				count++
			}
		}
	}
	return count
}
```