# Swift | Recursive, *non* DP solution

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/5315014/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/5315014/)

---

The idea is to generate all numbers <= n that have unique digits and subtract the count from n.

Finding the numbers with no repeated digits is very much liking generating all the permutations of 0123456789, so it's a well known problem.

Because there are not that many such numbers (say less than a few million), this can be done on time with the problem constraints.



# Code
```
class Solution {
    func numDupDigitsAtMostN(_ n: Int) -> Int {
        func countUnique(_ prefix: Int, _ seen: inout [Bool], _ uniqueCount: inout Int) {
            if prefix > n { return }
            if prefix > 0 { uniqueCount += 1 }
            for i in 0...9 where !seen[i] {
                if prefix == 0 && i == 0 { continue }
                seen[i] = true
                countUnique(prefix * 10 + i, &seen, &uniqueCount)
                seen[i] = false
            }
        }

        var seen = Array(repeating: false, count: 10)
        var uniqueCount = 0
        countUnique(0, &seen, &uniqueCount)

        return n - uniqueCount
    }
}
```