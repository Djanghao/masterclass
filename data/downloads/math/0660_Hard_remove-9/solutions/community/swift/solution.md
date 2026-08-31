# Swift solution - 10-based to 9-based

**Author:** cl0ud_runner
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-9/solutions/106589/](https://leetcode.com/problems/remove-9/solutions/106589/)

---

```
class Solution {
    func newInteger(_ n: Int) -> Int {
        var n = n
        var s = 1
        var result = 0
        
        while n > 0 {
            result += n % 9 * s
            n /= 9
            s *= 10
        }
        
        return result
    }
}
```