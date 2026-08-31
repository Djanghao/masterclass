# 40 line of codes - N(n*m)

**Author:** tuanbieber
**Votes:** 8
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/2308956/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/2308956/)

---

```
func findSubstring(s string, words []string) []int {
    wordFrequency := make(map[string]int)
    
    for _, word := range words {
        wordFrequency[word]++
    }
    
    var res []int
    
    length := len(words[0])
    
    for i := 0; i < len(s)-length*len(words)+1; i++ {
        seen := make(map[string]int)
        
        for j := 0; j < len(words); j++ {
            nextIndex := i + j*length
            word := s[nextIndex: nextIndex + length]

            if _, ok := wordFrequency[word]; !ok {
                break
            }
            
            seen[word]++
            
            seenFrequency, _ := seen[word]
            originFrequency, _ := wordFrequency[word]
            
            if seenFrequency > originFrequency {
                break
            }
 
            if j + 1 == len(words) {
                res = append(res, i)
            }
        }
    }
    
    return res
}
```