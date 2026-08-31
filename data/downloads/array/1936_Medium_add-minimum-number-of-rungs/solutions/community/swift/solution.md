# Swift solution | 100% efficient.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/2275602/](https://leetcode.com/problems/add-minimum-number-of-rungs/solutions/2275602/)

---

```
class Solution {
    func addRungs(_ A: [Int], _ dist: Int) -> Int {
        var pre = 0, res = 0
        for a in A {
            res += (a - pre - 1) / dist
            pre = a
        }
        return res
    }
}
```