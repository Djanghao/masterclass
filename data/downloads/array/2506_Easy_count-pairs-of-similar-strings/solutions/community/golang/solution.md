# Golang 4 ms 4.1 MB

**Author:** maxhero90
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2926681/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/2926681/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$
# Code
```
func similarPairs(words []string) int {
	result := 0
	h := make(map[int32]byte)
	for _, word := range words {
		var chars int32
		for i := 0; i < len(word); i++ {
			chars |= 1 << (word[i] - 'a')
		}
		c := h[chars]
		result += int(c)
		h[chars] = c + 1
	}
	return result
}
```