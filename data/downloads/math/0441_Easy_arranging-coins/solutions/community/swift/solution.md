# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 2
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/3465317/](https://leetcode.com/problems/arranging-coins/solutions/3465317/)

---



# Code
```
class Solution {
    func arrangeCoins(_ n: Int) -> Int {
        var (l, r) = (0, n)

        while l <= r {
            let mid = (l + r) / 2
            let res = mid * (mid + 1) / 2

            if res == n { return mid }
            res < n ? (l = mid + 1) : (r = mid - 1)
        }

        return r
    }
}
```