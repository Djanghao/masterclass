# Go(lang) Solution

**Author:** 0xedb
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/2077899/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/2077899/)

---

```go
func countLetters(S string) int {
    count, total := 1, 1
    
    for i := 1; i < len(S); i++ {
        if S[i] == S[i - 1] {
            count++
        } else {
            count = 1
        }
        
        total += count
    }    
    
    return total
}
```