# solution  by me ,algo gredy

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/5986196/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/5986196/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
   def calculateTax(brackets: Array[Array[Int]], income: Int): Double = {
    if (income == 0) return 0.0

    var sum: Double = 0.0
    var cache = 0
    var t = 0

    // Loop through each tax bracket
    while (cache < income && t < brackets.length) {
        val tax_per: Double = brackets(t)(1) / 100.0
        var bracket_limit = brackets(t)(0)

        // Calculate the taxable portion for this bracket
        var percent_t = if (income < bracket_limit) income - cache else bracket_limit - cache

        // Apply tax for this portion
        sum += percent_t * tax_per
        cache += percent_t

        t += 1
    }
    sum
}

}
```