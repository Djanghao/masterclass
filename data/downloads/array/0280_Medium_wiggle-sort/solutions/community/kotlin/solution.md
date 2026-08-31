# [Kotlin] O(NLogN) time, O(N) space solution

**Author:** sssurvey
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/3182977/](https://leetcode.com/problems/wiggle-sort/solutions/3182977/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort the list first, from smallest to largest. Refill the original array starting from `index = 0`. When we are at __odd index__, we take the smallest from `copy1` and bump `l // left index, smallest starting from [0]` by one. When we are at __even index__ we take the largest from `copy1` and decrease the `r // right index, largest starting from [copy1.size - 1]`. In the end, we will have a _zig zagged__ `nums`

# Approach
<!-- Describe your approach to solving the problem. -->
- Create a copy of the original array
- Sort the copy from small to large
- alternating between smallest and largest value of the copy array, and use them to fill the original `nums`, using the rule: __small for odd, and large for even.__ (every time a value is used, we remove them from the candidate pool by bumping `r: Int`, and decreasing `l: Int`)

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(nLogn)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(nLogn)$$

# Code
```
class Solution {
    fun wiggleSort(nums: IntArray): Unit {
        
        val copy1 = nums.toMutableList()

        copy1.sort()
        
        var l = 0
        var r = copy1.size - 1

        var index = 0
        while (index < nums.size) {
            if (index % 2 == 0) {
                nums[index] = copy1[l]
                l++
            } else {
                nums[index] = copy1[r]
                r--
            }
            index++
        }
    }
}
```