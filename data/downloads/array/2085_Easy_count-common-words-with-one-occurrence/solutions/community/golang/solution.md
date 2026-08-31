# 2 hashmap with Go

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/2458157/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/2458157/)

---

```
func countWords(words1 []string, words2 []string) int {
    m1, m2 := make(map[string]int), make(map[string]int)
    
    for _, word := range words1 {
        m1[word]++
    }
    
    for _, word := range words2 {
        m2[word]++
    }
    
    res := 0
    
    for word, fre := range m1 {
        if fre == 1 && m2[word] == 1 {
            res++
        }
    }
    
    return res
}
```