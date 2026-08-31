# simple 0(n^2) kotlin solution

**Author:** zAaron
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/4443378/](https://leetcode.com/problems/two-sum-less-than-k/solutions/4443378/)

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
    fun twoSumLessThanK(nums: IntArray, k: Int): Int {
        var max = 0
        when{
            nums == null -> return max
            nums.size == 2 ->{
                 when((nums[0] + nums[1]) < k){
                    true -> return (nums[0] + nums[1])
                    else -> return -1 
                }
             }
             else -> {
                for(i in 0..nums.size-2){
                    for(j in i+1..nums.size-1){
                        var sum = nums[i] + nums[j]
                        when(sum < k){
                            true -> {
                            var newMax = maxOf(max,sum)
                            max = newMax
                            }
                            else -> continue
                        }
                    }
                }
             }
        }

        return  when{
            max == 0 -> -1
            else -> max

        }
        
    }
}
```