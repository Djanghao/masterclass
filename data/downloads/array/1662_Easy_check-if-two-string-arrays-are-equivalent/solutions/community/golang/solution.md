# GOLANG | 0ms | O(1) Mem | HASHING

**Author:** stephenbgardner
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/2740414/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/2740414/)

---

Hashing algorithm used is djb2 by Dan Bernstein.

```
func hashWord(arr []string) int {
	// djb2: http://www.cse.yorku.ca/~oz/hash.html
	hash := 5381
	for _, s := range arr {
		for _, c := range s {
			hash = (hash * 33) ^ int(c)
		}
	}
	return hash
}

func arrayStringsAreEqual(word1 []string, word2 []string) bool {
	return hashWord(word1) == hashWord(word2)
}
```