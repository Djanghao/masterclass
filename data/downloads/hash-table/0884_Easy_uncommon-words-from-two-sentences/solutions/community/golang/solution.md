# Two hashmap  solution

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/2458258/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/2458258/)

---

```
func uncommonFromSentences(s1 string, s2 string) []string {
    str1 := strings.Split(s1, " ")
    str2 := strings.Split(s2, " ")
    
    wordSet1, wordSet2 := make(map[string]int), make(map[string]int)
    
    for _, word := range str1 {
        wordSet1[word]++
    }
    
    for _, word := range str2 {
        wordSet2[word]++
    }
    
    var res []string
    
    for word, fre := range wordSet1 {
        if _, ok := wordSet2[word]; !ok && fre == 1 {
            res = append(res, word)
        }
    }
    
    for word, fre := range wordSet2 {
        if _, ok := wordSet1[word]; !ok && fre == 1 {
            res = append(res, word)
        }
    }
    
    return res
}
```