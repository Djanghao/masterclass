# [Kotlin] One Pass

**Author:** Pony1999
**Votes:** 2
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2149138/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2149138/)

---

```
import kotlin.math.min

class Solution {
    fun calculateTax(brackets: Array<IntArray>, income: Int): Double {
        var tax = 0
        var pre = 0
        for ((upper, percent) in brackets) {
            if (pre > income) break
            tax += (min(upper, income) - pre) * percent
            pre = upper
        }
        return tax.toDouble() / 100
    }
}
```