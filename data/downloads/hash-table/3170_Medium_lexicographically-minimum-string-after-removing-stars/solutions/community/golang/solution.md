# Simple Go code by char index stack

**Author:** maroshim
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5477936/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5477936/)

---

# Code
```
func clearStars(s string) string {
    t := []byte(s)
    n := len(s)

    pos := [26][]int{}

    for i := 0; i < n; i++ {
        if t[i] != '*' {
            c := t[i]-'a'
            pos[c] = append(pos[c], i)
            continue
        }
        var c int
        for c = 0; c < 26; c++ {
            if len(pos[c]) > 0 { break }
        }
        p := pos[c][len(pos[c])-1]
        pos[c] = pos[c][:len(pos[c])-1]
        t[p] = '*'
    }
    tt := make([]byte, 0, n)
    for i := 0; i < n; i++ {
        if t[i] == '*' { continue }
        tt = append(tt, t[i])
    }
    return string(tt)
}

```