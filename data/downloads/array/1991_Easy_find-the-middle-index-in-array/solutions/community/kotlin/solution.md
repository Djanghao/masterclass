# Kotlin O(n)

**Author:** MohiFayden
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3707701/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/3707701/)

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
    fun findMiddleIndex(nums: IntArray): Int {
        var sum = 0
        var leftSum = 0
        for (num in nums) sum += num
        for((index, num) in nums.withIndex()){
            if(sum - leftSum - num == leftSum) return index
            leftSum += num
        }
        return -1
    }
}
```