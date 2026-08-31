# Swift solution

**Author:** cl0ud_runner
**Votes:** 3
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/87445/](https://leetcode.com/problems/utf-8-validation/solutions/87445/)

---

```
class Solution {
    func validUtf8(_ data: [Int]) -> Bool {
        var count = 0
        
        for byte in data {
            if count == 0 {
                if byte >> 5 == 0b110 {
                    count = 1
                } else if byte >> 4 == 0b1110 {
                    count = 2
                } else if byte >> 3 == 0b11110 {
                    count = 3
                } else if byte >> 7 != 0 {
                    return false
                }
            } else {
                if byte >> 6 != 0b10 {
                    return false
                }
                count -= 1
            }
        }
        
        return count == 0
    }
}
```