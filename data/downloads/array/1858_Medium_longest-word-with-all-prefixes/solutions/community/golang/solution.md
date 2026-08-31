# Golang solution with explanation

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/1206604/](https://leetcode.com/problems/longest-word-with-all-prefixes/solutions/1206604/)

---

[1858. Longest Word With All Prefixes](https://leetcode.com/problems/longest-word-with-all-prefixes/)

This solution aims to sort `words` so we get the previous prefix of the max word before the word. An example of this could be 

`words = ["k", "kiran","ki","kira","kir"]`
and when we sort, it becomes `words = ["k","ki","kir","kira", "kiran"]`.

Then we can use a map to build up the word. If the `len(word)` is equal to `1`, we know that it is a start of a word, or if the map contains `word` without the last letter, we know that there is the prefix of the word. So if either of these statements we know, we should add the word to the map and make the result the `max(word, res)`.

``` go
func longestWord(words []string) string {
	m := make(map[string]int)
	maximum := ""
	sort.Strings(words)

	for _, word := range words {
		if len(word) == 1 || m[word[:len(word)-1]] >= 1 {
			m[word]++
			if len(word) > len(maximum) {
				maximum = word
			}
		}
	}
	return maximum
}
```