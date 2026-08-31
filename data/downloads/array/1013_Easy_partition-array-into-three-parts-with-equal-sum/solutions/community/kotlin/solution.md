# Kotlin totalSum approach

**Author:** pcig
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/3847425/](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/solutions/3847425/)

---


# Approach
The problem is about partitioning the array into three parts where the sum of elements in each part is equal. One way to solve it is to first calculate the total sum of the elements in the array, and then, by traversing the array, check if it can be divided into three equal parts.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun canThreePartsEqualSum(nums: IntArray): Boolean {
        val totalSum = nums.sum()
        if (totalSum % 3 != 0) return false

        var count = 0
        var sum = 0
        val targetSum = totalSum / 3

        for (num in nums) {
            sum += num
            if (sum == targetSum) {
                sum = 0
                count++
            }
        }

        return count >= 3
    }
}
```