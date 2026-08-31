# Golang map solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/1797416/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/1797416/)

---

```go
type WordFilter struct {
	hash map[string]int
}

func Constructor(words []string) WordFilter {
	hash := make(map[string]int, len(words)*100)
	for i, word := range words {
		for l := 1; l <= 10 && l <= len(word); l++ {
			for r := 1; r <= 10 && r <= len(word); r++ {
				hash[word[:l]+":"+word[len(word)-r:]] = i
			}
		}
	}
	return WordFilter{
		hash: hash,
	}
}

func (wf *WordFilter) F(prefix string, suffix string) int {
	if v, exists := wf.hash[prefix+":"+suffix]; exists {
		return v
	}
	return -1
}
```