# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/3002201/](https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/solutions/3002201/)

---

```
class Solution {
    func checkZeroOnes(_ s: String) -> Bool {
        
        var cz = 0
        var co = 0
        
        var mz = 0
        var mo = 0
        
        for c in s {
            
            if c == "0" {
                cz += 1
                co = 0
            }
            else {
                cz = 0
                co += 1
            }
            
            mz = max(mz, cz)
            mo = max(mo, co)
        }
        
        return mo > mz
    }
}
```