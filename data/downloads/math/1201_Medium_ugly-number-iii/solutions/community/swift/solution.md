# Swift | Inclusion-Exclusion Principle + Binary Search

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number-iii/solutions/5380153/](https://leetcode.com/problems/ugly-number-iii/solutions/5380153/)

---

# Code
```
class Solution {
    func nthUglyNumber(_ n: Int, _ a: Int, _ b: Int, _ c: Int) -> Int {
        func gcd(_ a: Int, _ b: Int) -> Int {
            b == 0 ? a : gcd(b, a % b)
        }

        func lcm(_ a: Int, _ b: Int) -> Int {
            a * b / gcd(a, b)
        }

        func count(_ n: Int) -> Int {
            n / a + n / b + n / c
            - n / lcm(a, b) - n / lcm(a, c) - n / lcm(b, c)
            + n / lcm(a, lcm(b, c))
        }

        var (lo, hi) = (0, a * n)

        var res = 0
        while lo <= hi {
            let mid = lo + (hi - lo) / 2
            let val = count(mid)
            if val < n {
                lo = mid + 1
            } else {
                res = mid
                hi = mid - 1
            }
        }

        return res
    }
}
```