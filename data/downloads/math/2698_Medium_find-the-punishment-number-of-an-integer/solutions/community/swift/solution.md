# Swift

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/5640832/](https://leetcode.com/problems/find-the-punishment-number-of-an-integer/solutions/5640832/)

---

# Code
```
class Solution {
    func punishmentNumber(_ n: Int) -> Int {
        var res = 0
        for i in 1...n {
            if isSummable(i * i, i) {
                res += i * i
            }
        }
        return res

        func isSummable(_ n: Int, _ sum: Int) -> Bool {
            if n < 10 { return n == sum }

            return 
                isSummable(n / 10, sum - n % 10) ||
                isSummable(n / 100, sum - n % 100) ||
                isSummable(n / 1000, sum - n % 1000) ||
                isSummable(n / 10000, sum - n % 10000)
        }
    }
}
```