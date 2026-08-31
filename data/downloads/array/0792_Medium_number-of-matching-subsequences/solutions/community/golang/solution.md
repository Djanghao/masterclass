# Easy to understand - O(N)*len(s) TC

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-matching-subsequences/solutions/2238891/](https://leetcode.com/problems/number-of-matching-subsequences/solutions/2238891/)

---

```
func numMatchingSubseq(s string, words []string) int {
    res := 0
    
    for _, word := range words {
        if isSubsequence(word, s) { res++ }
    }
    
    return res
}

func isSubsequence(s string, t string) bool {
    left := 0
    
    for i := 0; i < len(t); i++ {
        if left == len(s) { return true }
        
        if t[i] == s[left] {
            left++
        }    
    }

    return left == len(s)
}
```

**Another one - Faster with map to handle duplicate values**
```
func numMatchingSubseq(s string, words []string) int {
    count, wordSet := 0, make(map[string]int)
    
    for _, word := range words {
        wordSet[word]++
    }
    
    for w := range wordSet {
        if isSubsequence(w, s) {
            count += wordSet[w]
        }
    }
    
    return count
}

func isSubsequence(s string, t string) bool {
    left := 0
    
    for i := 0; i < len(t); i++ {
        if left == len(s) { return true }
        
        if t[i] == s[left] {
            left++
        }    
    }

    return left == len(s)
}
```