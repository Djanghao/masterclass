# Basic and easy solution in kotlin

**Author:** MayankBisht8630
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5744775/](https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/solutions/5744775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Basic Approch

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun countCompleteDayPairs(hours: IntArray): Int {
        var count =0
        val length =hours.size
        for(i in 0 until length){
            for(j in i+1 until length){
                if(i<j && (hours[i] + hours[j]) % 24 == 0){
                    count++
                }
            }
        } 
        return count
    }
}
```