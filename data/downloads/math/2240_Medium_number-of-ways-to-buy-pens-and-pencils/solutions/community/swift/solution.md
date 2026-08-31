# Swift | Simple Math

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/5436912/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/5436912/)

---


This problem can probably be solved using DP but I kept getting TLE. In fact, it is very easy to solve using simple math.

```
class Solution {
    func waysToBuyPensPencils(_ total: Int, _ cost1: Int, _ cost2: Int) -> Int {
        var res = 0
        for i in 0...total / cost1 {
            let remainder = total - i * cost1
            res += remainder / cost2 + 1
        }
        return res
    }
}
```