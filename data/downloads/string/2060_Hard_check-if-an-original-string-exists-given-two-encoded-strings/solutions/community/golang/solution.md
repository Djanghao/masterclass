# Just "classic" solution with diff in Go

**Author:** dspasibenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/3817304/](https://leetcode.com/problems/check-if-an-original-string-exists-given-two-encoded-strings/solutions/3817304/)

---



# Code
```
func possiblyEquals(s1 string, s2 string) bool {
    return checkPatterns(s1, s2, 0)
}

var cache map[string]bool = map[string]bool{}

func checkPatterns(s1, s2 string, diff int) bool {
    if s1 == "" && s2 == "" {
        return diff == 0
    }
    if len(s1) > 0 && isDigit(s1[0]) {
        return processDigsFor1(s1, s2, diff)
    }
    if len(s2) > 0 && isDigit(s2[0]) {
        return processDigsFor2(s1, s2, diff)
    }
    if len(s1) > 0 && diff < 0 {
        return checkPatterns(s1[1:], s2, diff+1)
    }
    if len(s2) > 0 && diff > 0 {
        return checkPatterns(s1, s2[1:], diff-1)
    }
    if len(s1) > 0 && len(s2) > 0 && s1[0] == s2[0] {
        return checkPatterns(s1[1:], s2[1:], diff)
    }
    return false
}

func processDigsFor1(s1, s2 string, diff int) bool {
    p := fmt.Sprintf("%s-%s-%d", s1, s2, diff)
    if v, ok := cache[p]; ok {
        return v
    }
    for i := 0; i < len(s1) && isDigit(s1[i]); i++ {
        var ln int
        fmt.Sscanf(s1[:i+1], "%d", &ln)
        if checkPatterns(s1[i+1:], s2, diff+ln) {
            cache[p] = true
            return true
        }
    }
    cache[p] = false
    return false
}

func processDigsFor2(s1, s2 string, diff int) bool {
    p := fmt.Sprintf("%s-%s-%d", s1, s2, diff)
    if v, ok := cache[p]; ok {
        return v
    }
    for i := 0; i < len(s2) && isDigit(s2[i]); i++ {
        var ln int
        fmt.Sscanf(s2[:i+1], "%d", &ln)
        if checkPatterns(s1, s2[i+1:], diff-ln) {
            cache[p] = true
            return true
        }
    }
    cache[p] = false
    return false
}

func isDigit(b byte) bool {
    return b >= '0' && b <= '9'
}
```