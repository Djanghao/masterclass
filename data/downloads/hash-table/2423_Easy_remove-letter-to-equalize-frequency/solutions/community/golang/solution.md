# golang solution 0ms 100%

**Author:** fshiori
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2654324/](https://leetcode.com/problems/remove-letter-to-equalize-frequency/solutions/2654324/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Remove Letter To Equalize Frequency.
Memory Usage: 1.9 MB, less than 100.00% of Go online submissions for Remove Letter To Equalize Frequency.

```
func equalFrequency(word string) bool {
    m := make(map[rune]int)
    for _, r := range word {
        if v, ok := m[r]; ok {
            m[r] = v + 1 
        } else {
            m[r] = 1
        }
    }
    m2 := make(map[int]int)
    for _, c := range m {
        if v, ok := m2[c]; ok {
            m2[c] = v + 1 
        } else {
            m2[c] = 1
        }        
    }
    if len(m2) == 1 {
        var k, v int
        for k, v = range m2 {}
        if k == 1 || v == 1 {
            return true
        }
        return false
    } else if len(m2) > 2 {
        return false
    }
    s := make([]int, 0, 2)
    for k, _ := range m2 {
        s = append(s, k)
    }
    sort.Ints(s)
    if v, _ := m2[s[1]]; v == 1 && s[1] - s[0] == 1 {
        return true
    }
    if v, _ := m2[s[0]]; v == 1 && s[0] == 1{
        return true
    } 
    return false
}
```