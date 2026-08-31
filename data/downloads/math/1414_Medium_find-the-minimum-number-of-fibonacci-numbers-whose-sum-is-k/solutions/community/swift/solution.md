# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/3242992/](https://leetcode.com/problems/find-the-minimum-number-of-fibonacci-numbers-whose-sum-is-k/solutions/3242992/)

---

```
class Solution {
    func findMinFibonacciNumbers(_ k: Int) -> Int {

        var f = [1, 1]

        while f[f.count - 1] < k {
            f.append(f[f.count - 1] + f[f.count - 2])
        }

        var c = 0
        var s = 0
        var i = f.count - 1

        while s != k {
            if s + f[i] <= k {
                s += f[i]
                c += 1
            }
            i -= 1
        }

        return c
    }
}
```