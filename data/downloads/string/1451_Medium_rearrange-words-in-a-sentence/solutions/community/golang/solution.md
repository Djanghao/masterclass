# [Go] using sort.SliceStable

**Author:** gesaus
**Votes:** 1
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/639022/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/639022/)

---


```
type x struct {
    k string
    val int
}

func arrangeWords(text string) string {
    m := strings.Split(text, " ")
    m[0] = strings.ToLower(m[0])
    mp := make([]x, len(m))
    for i := 0; i < len(m); i++ {
        mp[i].k= m[i]
        mp[i].val = len(m[i])
    }
    sort.SliceStable(mp, func (i, j int) bool {
        return mp[i].val < mp[j].val
    })
    mp[0].k = strings.Title(mp[0].k)    
    ret := ""
    for i := 0; i < len(mp); i++ {
        ret += mp[i].k + " " 
    }
    return strings.TrimRight(ret, " ")
}
```