# Golang Array

**Author:** hong_zhao
**Votes:** 12
**Link:** [https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2868154/](https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2868154/)

---

```go
func closeStrings(word1 string, word2 string) bool {
	counter := func(word string) (keys, vals [26]int) {
		for i := range word {
			keys[word[i]-'a'] = 1
			vals[word[i]-'a'] += 1
		}
		sort.Ints(vals[:])
		return keys, vals
	}
	keys1, vals1 := counter(word1)
	keys2, vals2 := counter(word2)
	return keys1 == keys2 && vals1 == vals2
}
```