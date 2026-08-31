# Go Solution Map and Array - 0ms

**Author:** phea
**Votes:** 6
**Link:** [https://leetcode.com/problems/word-pattern/solutions/834338/](https://leetcode.com/problems/word-pattern/solutions/834338/)

---

There's no need to use a second map for the character pattern as they are single characters 'a'-'z'.

https://github.com/phea/leetcode-go

```go
func wordPattern(pattern string, str string) bool {
    codes := make(map[string]byte)
    used := make([]bool, 26)
    words := strings.Split(str, " ")
    if len(pattern) != len(words) {
        return false
    }
    
    for i, word := range words {
        code, ok := codes[word]
        if !ok {
            // check if character was already used
            if used[pattern[i]-'a'] {
                return false
            }
            used[pattern[i]-'a'] = true
            codes[word] = pattern[i]
            continue
        }
        
        if code != pattern[i] {
            return false
        }
        
    }
    
    return true
}
```