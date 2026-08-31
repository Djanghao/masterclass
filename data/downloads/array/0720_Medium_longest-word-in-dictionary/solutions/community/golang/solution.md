# golang easy to understand

**Author:** cra2yk
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/376113/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/376113/)

---

```golang
func longestWord(words []string) string {
	// sort strings according to lexicographical order and word's length.
	sort.Strings(words)

	// using map to record word appearance.
	var wordMap = map[string]interface{}{}
	var maxWord string
	wordMap[""] = nil

	for _, word := range words {
		if _, flag := wordMap[word[:len(word)-1]]; flag {
			wordMap[word] = nil

			if len(maxWord) < len(word) {
				maxWord = word
			} else if len(maxWord) == len(word) && word < maxWord {
				// if maxword's length equal to word length, save the lower one according to lexicographical order
				maxWord = word
			}
		}
	}

	return maxWord
}

```