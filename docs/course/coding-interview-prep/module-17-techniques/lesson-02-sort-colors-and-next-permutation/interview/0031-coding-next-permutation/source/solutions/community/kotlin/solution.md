# 20 lines of code

**Author:** diegopap
**Votes:** 2
**Link:** [https://leetcode.com/problems/next-permutation/solutions/5097836/](https://leetcode.com/problems/next-permutation/solutions/5097836/)

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
    fun nextPermutation(nums: IntArray): Unit {
        for(i in nums.lastIndex - 1 downTo 0) {
            for (j in nums.lastIndex downTo i + 1) {
                if(nums[j] > nums[i]) {
                    nums.swap(i, j)
                    nums.sort(i + 1)
                    return
                }
            }
        }
        nums.sort()
    }

    fun IntArray.swap(i: Int, j: Int) {
        val temp = this[i]
        this[i] = this[j]
        this[j] = temp
    }
}
```