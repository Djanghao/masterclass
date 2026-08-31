# Go stack

**Author:** tuanbieber
**Votes:** 9
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/2517962/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/2517962/)

---

```
func removeStars(s string) string {
    var stack []byte
    
    for i := 0; i < len(s); i++ {
        if s[i] == '*' {
            stack = stack[:len(stack)-1]
        } else {
            stack = append(stack, s[i])
        }
    }
    
    return string(stack)
}
```