# Funny Go solution

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2462835/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/2462835/)

---

```
func removeDigit(number string, digit byte) string {
    var res string
    
    for i := 0; i < len(number); i++ {
        if number[i] == digit {
            if res == "" || number[:i] + number[i+1:] > res {
                res = number[:i] + number[i+1:]
            }
        }
    }
    
    return res
}
```