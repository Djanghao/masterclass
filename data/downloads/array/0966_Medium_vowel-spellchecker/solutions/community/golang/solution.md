# Vowel Spellchecker | Faster than 100% | Golang

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/1122704/](https://leetcode.com/problems/vowel-spellchecker/solutions/1122704/)

---

```
func lowerAndRemoveVowels(word string) string {
	word = strings.ToLower(word)
	word = strings.ReplaceAll(word, "a", "*")
	word = strings.ReplaceAll(word, "e", "*")
	word = strings.ReplaceAll(word, "i", "*")
	word = strings.ReplaceAll(word, "o", "*")
	word = strings.ReplaceAll(word, "u", "*")
	return word
}

func spellchecker(wordlist []string, queries []string) []string {
	wordsMap := make(map[string]bool)
	wordsLowerMap := make(map[string]string)
	wordsLARVMap := make(map[string]string)
	for _, word := range wordlist {
		wordsMap[word] = true
		lowerStr := strings.ToLower(word)
		wordsLARVStr := lowerAndRemoveVowels(word)
		if _, ok := wordsLowerMap[lowerStr]; !ok {
			wordsLowerMap[strings.ToLower(word)] = word
		}
		if _, ok := wordsLARVMap[wordsLARVStr]; !ok {
			wordsLARVMap[wordsLARVStr] = word
		}
	}
	ret := make([]string, 0)
	for _, query := range queries {
		var answer string
		found := false
		if wordsMap[query] {
			found = true
			answer = query
		}
		if !found {
			lowerCaseQuery := strings.ToLower(query)
			answer, found = wordsLowerMap[lowerCaseQuery]
		}
		if !found {
			noVowelsQuery := lowerAndRemoveVowels(query)
			answer, found = wordsLARVMap[noVowelsQuery]
		}
		if !found {
			answer = ""
		}
		ret = append(ret, answer)
	}
	return ret
}

```