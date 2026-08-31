# Go

**Author:** dynasty919
**Votes:** 0
**Link:** [https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2707068/](https://leetcode.com/problems/using-a-robot-to-print-the-lexicographically-smallest-string/solutions/2707068/)

---

```
func robotWithString(s string) string {
    
    dict := make(map[byte]int)
    for i := 0; i < len(s); i++ {
        dict[s[i]]++
    }
    
    list := []byte(s)
    sort.Slice(list, func(i int, j int) bool {
        return list[i] < list[j]
    })
    
    var paper bytes.Buffer
    var t []byte
    i, j := 0, 0
    last := 0
    for i < len(s) {
        if dict[list[j]] <= 0 {
            j++
            continue
        }
        
        if len(t) > 0 && list[j] >= t[len(t) - 1] {
            paper.WriteByte(t[len(t) - 1])
            t = t[:len(t) - 1]
            continue
        }
        
        if s[i] == list[j] {
            paper.WriteByte(s[i])
            dict[s[i]]--
            for k := last; k < i; k++ {
                t = append(t, s[k])
                dict[s[k]]--
            }
            last = i + 1
            i++
            j++
        } else {
            i++
        }
    }
    
    for i := len(t) - 1; i >= 0; i-- {
        paper.WriteByte(t[i])
    }
    return paper.String()
}
```