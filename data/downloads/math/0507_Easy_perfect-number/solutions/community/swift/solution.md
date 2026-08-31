# One line swift solution 100% runtime and memory

**Author:** yamironov
**Votes:** 2
**Link:** [https://leetcode.com/problems/perfect-number/solutions/443883/](https://leetcode.com/problems/perfect-number/solutions/443883/)

---

There are only five perfect numbers in given limits
```
class Solution {
    func checkPerfectNumber(_ num: Int) -> Bool {
        return [6, 28, 496, 8128, 33550336].contains(num)
    }
}
```