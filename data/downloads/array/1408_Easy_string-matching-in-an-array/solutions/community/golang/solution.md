# Go brute force

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/2482659/](https://leetcode.com/problems/string-matching-in-an-array/solutions/2482659/)

---

```
func stringMatching(words []string) []string {
    wordSet := make(map[string]struct{})
    
    for i := 0; i < len(words); i++ {
        for j := 0; j < len(words); j++ {
            if i != j && strings.Contains(words[i], words[j]) {
                wordSet[words[j]] = struct{}{}
            }
        }
    }
    
    var res []string
    
    for k, _ := range wordSet {
        res = append(res, k)
    }
    
    return res
}
```