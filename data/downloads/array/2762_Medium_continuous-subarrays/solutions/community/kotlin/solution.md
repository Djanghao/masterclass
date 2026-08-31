# Kotlin / tree map

**Author:** SatanBriber
**Votes:** 1
**Link:** [https://leetcode.com/problems/continuous-subarrays/solutions/3709940/](https://leetcode.com/problems/continuous-subarrays/solutions/3709940/)

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

    fun continuousSubarrays(nums: IntArray): Long {
        var left = 0
        var right = 0
        var total = 0L
        val tree = TreeMap<Int, Int>()
        val n = nums.size

        while (right < n) {
            if(!tree.containsKey(nums[right])){
                tree[nums[right]] = 0
            }
            tree[nums[right]] = tree[nums[right]]!! + 1 
            
            while (Math.abs(tree.lastKey() - nums[right]) > 2 || Math.abs(tree.firstKey() - nums[right]) > 2){
                val keyL = nums[left]
                tree[keyL] = tree[keyL]!! - 1
                if(tree[keyL] == 0) tree.remove(keyL)
                left++
            }
            
            total += right - left + 1
            
            right++
        }

        return total
    }
}
```