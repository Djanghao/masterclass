# Golang  XOR O(n)/O(1) 100% fastest No HashMaps No Extra Space

**Author:** gene-rode
**Votes:** 2
**Link:** [https://leetcode.com/problems/odd-string-difference/solutions/3216033/](https://leetcode.com/problems/odd-string-difference/solutions/3216033/)

---

```
// just comparing difference between 2 letters 
// in each first word and next. when we've found difference 
// question is w[0] is our target or word, idx solve this case.
func oddString(w []string) string {
    var idx int
    for k, word := range w {
        for c, v := range word {
            if c > 0 && (w[0][c]-w[0][c-1]) ^ (byte(v) - word[c-1]) != 0  {
                   if idx != 0 { return w[0] }
                idx = k
                break 
            } 
        }
    }
    return w[idx]
}


```