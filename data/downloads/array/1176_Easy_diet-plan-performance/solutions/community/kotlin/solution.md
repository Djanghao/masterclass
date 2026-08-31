# Kotlin Window O(n), O(n)

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/3000372/](https://leetcode.com/problems/diet-plan-performance/solutions/3000372/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun dietPlanPerformance(calories: IntArray, k: Int, lower: Int, upper: Int): Int {
        var sum = 0
        getCaloriesByDay(calories, k).forEach {
            when {
                it < lower -> sum--
                it > upper -> sum++  
            }
        }

        return sum
    }

    private fun getCaloriesByDay(calories: IntArray, k: Int): List<Int> {
        val result = mutableListOf<Int>()
        var total = 0

        for (i in 0..k-1) total += calories[i] 
        result.add(total)

        for (i in k..calories.size-1) {
            total = total - calories[i - k] + calories[i]
            result.add(total)
        }
       
        return result
    }
}
```