# Swift solution

**Author:** cl0ud_runner
**Votes:** 6
**Link:** [https://leetcode.com/problems/power-of-two/solutions/63977/](https://leetcode.com/problems/power-of-two/solutions/63977/)

---

```
class Solution {
    func isPowerOfTwo(_ n: Int) -> Bool {
        if n <= 0 {
            return false
        }
        
        return (n & (n - 1)) == 0
    }
}
```