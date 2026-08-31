# Simple Go / Golang

**Author:** alfinm01
**Votes:** 4
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2173493/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2173493/)

---

Time complexity: **O(N)**
Memory complexity: **O(1)**

```
func greatestLetter(s string) string {
    occurrence := make([]bool, 'z'+1)
    diff := 'a' - 'A'
    
    for _, letter := range s {
        occurrence[letter] = true
    }
    
    for i := 'Z'; i >= 'A'; i-- {
        if occurrence[i] && occurrence[i+diff] {
            return string(i)
        }
    }
    
    return ""
}
```