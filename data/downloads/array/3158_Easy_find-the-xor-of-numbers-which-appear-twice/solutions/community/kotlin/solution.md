# Easy Kotlin Solution

**Author:** saidurcse
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5389161/](https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/solutions/5389161/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun duplicateNumbersXOR(nums: IntArray): Int {
         
        // Inside map we have to keep count
        // If we find count is two, then we have to make xor operation

        val numberCount = HashMap<Int, Int>()
        for(i in 0 until nums.size) {
            var count = numberCount.getOrDefault(nums[i],0)
            numberCount[nums[i]] = count + 1
        }

        var result = 0

        for((key, value) in numberCount) {
            if(value == 2) {
                result = result xor key
            }
        }

        return result
    }
}
```