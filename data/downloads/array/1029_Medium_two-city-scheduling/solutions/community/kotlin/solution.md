# O(nlogn) Kotlin Easy to Understand

**Author:** brentlikestocode
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/4965272/](https://leetcode.com/problems/two-city-scheduling/solutions/4965272/)

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
```
class Solution {
    fun twoCitySchedCost(costs: Array<IntArray>): Int {
        // Calculate the initial cost of sending everyone to city A
        val initialCost = costs.sumBy { it[0] }
        
        // Calculate the differences in cost between going to city B and city A for each person
        val differences = costs.map { it[1] - it[0] }.sorted()
        
        // Add the cost of sending the first half of people to city B instead of city A
        val adjustment = differences.take(costs.size / 2).sum()
        
        // The total minimum cost is the sum of the initial cost and the adjustment
        return initialCost + adjustment
    }
}
```