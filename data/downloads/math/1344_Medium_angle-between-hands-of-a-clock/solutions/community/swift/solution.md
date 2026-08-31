# ✅ [Solution][Swift] Math O(1)

**Author:** adanilyak
**Votes:** 0
**Link:** [https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/4635401/](https://leetcode.com/problems/angle-between-hands-of-a-clock/solutions/4635401/)

---

**TC:** $$O(1)$$
**SC:** $$O(1)$$
```
class Solution {
    func angleClock(_ hour: Int, _ minutes: Int) -> Double {
        let h = Double(hour % 12), m = Double(minutes)
        let hpi = (h + m / 60) / 6, mpi = m / 30

        var a = abs(hpi - mpi)
        if a > 1 {
            a = 2 - a
        }

        return a * 180
    }
}
```