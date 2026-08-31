# Funny solution with Go

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/2466222/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/2466222/)

---

```
func makeEqual(words []string) bool {
    alphabet := make([]int, 26)
    
    for _, word := range words {
        for i := 0; i < len(word); i++ {
            alphabet[int(word[i] - 'a')]++
        }
    }

    for i := 0; i < 26; i++ {
        if alphabet[i] % len(words) != 0 {
            return false
        }
    }
    
    return true
}
```