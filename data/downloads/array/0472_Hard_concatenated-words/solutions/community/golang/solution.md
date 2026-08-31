# Go - Easy to understand O(n**2) Approach✅

**Author:** sinistersup2001
**Votes:** 3
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3103616/](https://leetcode.com/problems/concatenated-words/solutions/3103616/)

---

# Complexity
- Time complexity: O(n^2*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
func findAllConcatenatedWordsInADict(words []string) []string {
    s := make(map[string]bool)
    concatenateWords := []string{}
    for _, word := range words {
        s[word] = true
    }
    for _, word := range words {
        if checkConcatenate(word, s) {
            concatenateWords = append(concatenateWords, word)
        }
    }
    return concatenateWords
}

func checkConcatenate(word string, s map[string]bool) bool {
    for i := 1; i < len(word); i++ {
        prefixWord := word[:i]
        suffixWord := word[i:]
        if s[prefixWord] && (s[suffixWord] || checkConcatenate(suffixWord, s)) {
            return true
        }
    }
    return false
}
```