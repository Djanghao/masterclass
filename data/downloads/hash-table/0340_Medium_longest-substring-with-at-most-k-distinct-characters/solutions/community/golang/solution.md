# Golang solution better space than 100%

**Author:** nathannaveen
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/1245230/](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/solutions/1245230/)

---

I would write a explaination for this solution but I am feeling extreamly lazy today, so feel free to give an explaination in the comments.

```
func lengthOfLongestSubstringKDistinct(s string, k int) int {
	m := make(map[byte]int)
	maximum := 0
	begining := 0

	for i := 0; i < len(s); i++ {
		m[s[i]]++
		for len(m) > k {
			m[s[begining]]--
			if m[s[begining]] == 0 {
				delete(m, s[begining])
			}
			begining++
		}
		if i-begining+1 > maximum {
			maximum = i - begining + 1
		}
	}

	return maximum
}
```