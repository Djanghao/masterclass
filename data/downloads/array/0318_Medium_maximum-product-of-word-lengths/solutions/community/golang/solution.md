# Go 8ms 100% bit solution

**Author:** tjucoder
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/524160/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/524160/)

---

```go
func maxProduct(words []string) int {
	sort.Slice(words, func(i, j int) bool {
		return len(words[i]) > len(words[j])
	})
	alpha := make([]int, len(words))
	for i, w := range words {
		for _, c := range w {
			alpha[i] = alpha[i] | (0x1 << uint(c-'a'))
		}
	}
	max := 0
	for i := 0; i < len(words); i++ {
		if max >= len(words[i])*len(words[i]) {
			break
		}
		for j := i + 1; j < len(words); j++ {
			if max >= len(words[i])*len(words[j]) {
				break
			}
			if alpha[i]&alpha[j] != 0 {
				continue
			}
			max = len(words[i]) * len(words[j])
			break
		}
	}
	return max
}
```