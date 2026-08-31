# Simple

**Author:** sav20011962
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/4308570/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/4308570/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    fun getDescentPeriods(prices: IntArray): Long {
        var prev = 1
        var sum = 1L
        for (i in 1 until prices.size) {
            if (prices[i]==prices[i-1]-1) prev++
            else prev=1
            sum += prev
        }
        return sum
    }
}
```