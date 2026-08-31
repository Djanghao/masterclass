# Lightweight solution, that uses incoming array as resulting array

**Author:** mmteams91java
**Votes:** 1
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/4057514/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/4057514/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
class Solution {
    fun leftRightDifference(nums: IntArray): IntArray {
        var rightSum = (1 until nums.size).sumBy{ nums[it] }
        var leftSum = nums[0]
        nums[0] = rightSum.absoluteValue
        (1 until nums.size).forEach{index->
            val current = nums[index]
            rightSum -= current
            nums[index] = (leftSum - rightSum).absoluteValue
            leftSum += current
        }
        return nums
    }
}
```