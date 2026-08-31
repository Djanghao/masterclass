# Kotlin Sorting O(m * n log n)

**Author:** jschnall
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3597767/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3597767/)

---

# Approach
Simply sort each row, then iterate down each column

# Complexity
- Time complexity:
If nums contains m rows of m items
$$O(m * n logn)$$ to sort each row, then $$O(m * n)$$ to iterate over each column to find the max. Therefore the limiting factor is the sort and overall complexity is 
$$O(m * n logn)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun matrixSum(nums: Array<IntArray>): Int {
        var result = 0

        nums.forEach { row ->
            row.sortDescending()
        }

        for (i in 0 until nums[0].size) {
            var max = 0

            for (j in 0 until nums.size) {
                max = maxOf(max, nums[j][i])    
            }
            result += max
        }
        
        return result
    }
}
```