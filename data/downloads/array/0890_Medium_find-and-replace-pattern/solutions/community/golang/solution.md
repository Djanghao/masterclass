# Golang : String Normalize

**Author:** harshawasthi90
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/3040278/](https://leetcode.com/problems/find-and-replace-pattern/solutions/3040278/)

---

# Code
```
package main

// url: https://leetcode.com/problems/find-and-replace-pattern/
// date: 12-01-2023 : 09:58 am

func findAndReplacePattern(words []string, pattern string) []string {
	p := normalize(pattern)

	var ans []string

	for _, word := range words {
		if normalize(word) == p {
			ans = append(ans, word)
		}
	}

	return ans

}

func normalize(word string) string {
	result := make([]byte, 0, len(word))
	index := byte('a')
	dict := map[int32]byte{}

	for _, ch := range word {
		if _, ok := dict[ch]; !ok {
			dict[ch] = index
			index++
		}
		result = append(result, dict[ch])
	}

	return string(result)
}

```