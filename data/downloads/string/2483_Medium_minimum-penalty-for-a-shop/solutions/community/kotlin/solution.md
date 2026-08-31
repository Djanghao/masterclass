# Kotlin linear solution that beats at least 80% solutions

**Author:** rasulbek
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3974713/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3974713/)

---

# Intuition
I will better consider maximum income for store's open hours. And if there will not be a customer income will decrese for every hour.

# Approach
For every ``i-th`` hour that customer arrives, we will increase so-called `income`. And if the income is greater than previous maximum income then we will retake maximum income and store the minimum index `mi`.
For every ``i-th`` hour that customer will not come, and if we were not closed the store then income will decrease.

# Complexity
- Time complexity: $$O(n)$$


# Code
```
class Solution {
    fun bestClosingTime(customers: String): Int {
        var income = 0
        var max = 0
        var mi = 0
        customers.forEachIndexed { i, c ->
            if (c=='Y') {
                income++
                if (income > max) {
                    max = income
                    mi = i+1
                }
            } else {
                income--
            }
        }
        return mi
    }
}
```