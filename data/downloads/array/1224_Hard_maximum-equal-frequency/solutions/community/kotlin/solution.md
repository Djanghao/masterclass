# Easy solution using hashmap

**Author:** justherefortesting
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-equal-frequency/solutions/4920210/](https://leetcode.com/problems/maximum-equal-frequency/solutions/4920210/)

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
    fun maxEqualFreq(nums: IntArray): Int {
        var max = 0
        for(x in nums)
            if(x > max)
                max = x
        val map = IntArray(nums.size + 1) 
        val a = IntArray(max + 1)

        max = 1
        var maxFreq = 0
        var minFreq = Int.MAX_VALUE
        var count = 0

        for(i in 0 until nums.size) {
            var freq =  ++a[nums[i]]
            if (map[freq]++ == 0) 
                count++
            
            if (freq > 1 && map[freq-1]-- == 1){ 
                count--
                if (freq - 1 == minFreq) 
                   minFreq++
            }

            maxFreq = Math.max(maxFreq, freq)
            minFreq = Math.min(minFreq, freq)
            
            if(count == 1 && (maxFreq == 1 || map[maxFreq] == 1))
                max = Math.max(max, i + 1)
            
            
            if (count == 2) {
                if (map[1] == 1 || (map[maxFreq] == 1 && maxFreq == minFreq + 1))
                   max = Math.max(max, i+1)
            }
        }
        return max
    }
}
```