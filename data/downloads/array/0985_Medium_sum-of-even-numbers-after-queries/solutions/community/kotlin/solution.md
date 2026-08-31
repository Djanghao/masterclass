# Kotlin straightforward approach

**Author:** Botir_Adoshboyev
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/4239007/](https://leetcode.com/problems/sum-of-even-numbers-after-queries/solutions/4239007/)

---

# Complexity
- Time complexity:
O(n) where n is the size if queries

- Space complexity:
O(1)

# Code
```
class Solution {
    fun sumEvenAfterQueries(nums: IntArray, queries: Array<IntArray>): IntArray {
        var sum = nums.sumOf { num -> if (num % 2 == 0) num else 0 }
        val res = IntArray(queries.size)
        queries.forEachIndexed { i, query ->
            val index = query[1]
            val newValue = nums[index] + query[0]
            if (newValue % 2 == 0) {
                if (nums[index] % 2 == 0) sum -= nums[index]
                sum += newValue
            } else {
                if (nums[index] % 2 == 0) sum -= nums[index]
            }
            nums[index] = newValue
            res[i] = sum
        }
        return res
    }
}
```