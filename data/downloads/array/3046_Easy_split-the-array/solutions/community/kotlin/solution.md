# Easy Kotlin Soluton

**Author:** saidurcse
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array/solutions/5457087/](https://leetcode.com/problems/split-the-array/solutions/5457087/)

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
    fun isPossibleToSplit(nums: IntArray): Boolean {
        
        var n = nums.size
             
        if(n % 2 != 0) return false

        var maps = HashMap<Int, Int>()

        for(i in 0 until n) {
            val count = maps.getOrDefault(nums[i],0)
            maps[nums[i]] = count + 1
        }

        for((key, value) in maps) {
            if(value > 2)
                return false
        }

        return true
    }
}
```