# Swift | One liner | O(n) time, O(1) space

**Author:** iosdevzone
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836487/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3836487/)

---

# Code
```
class Solution {
    func numberOfEmployeesWhoMetTarget(_ hours: [Int], _ target: Int) -> Int {
        hours.reduce(0) { $1 >= target ? $0 + 1 : $0 }
    }
}
```