# Kotlin beginner code

**Author:** Lukeash
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/4365734/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/4365734/)

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
    fun countPairs(nums: IntArray, k: Int): Int {        
        var count = 0
        for(i in nums.indices) {
            for(j in (i + 1)..nums.size - 1) {
                if(nums[i] == nums[j] && (i * j) % k == 0) {
                    count++
                }
            }
        }
        return count
    }
}
```