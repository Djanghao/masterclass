# Go solution

**Author:** dchooyc
**Votes:** 3
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1585482/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/1585482/)

---

```
func toHex(num int) string {
    if num == 0 {
        return "0"
    }
    
    n, ref := uint32(num), "0123456789abcdef"
    
    res := ""
    
    for n != 0 {
        res = string(ref[n & 0xF]) + res
        n >>= 4
    }
    
    return res
}
```