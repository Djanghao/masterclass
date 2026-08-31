# 0ms with Go + map + string builder

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/unique-morse-code-words/solutions/2436736/](https://leetcode.com/problems/unique-morse-code-words/solutions/2436736/)

---

```
func uniqueMorseRepresentations(words []string) int {
    wordSet := make(map[string]struct{})
    
    alphabet := []string{".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."}
    
    for i := 0; i < len(words); i++ {
        var currentWord strings.Builder
        
        for j := 0; j < len(words[i]); j++ {
            currentWord.WriteString(alphabet[words[i][j] - 'a'])
        }
        
        if _, ok := wordSet[currentWord.String()]; !ok {
            wordSet[currentWord.String()] = struct{}{}
        }
    }
    
    return len(wordSet)
}
```