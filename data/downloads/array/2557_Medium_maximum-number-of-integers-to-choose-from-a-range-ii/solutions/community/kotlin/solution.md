# Sort with Greedy beats 100% kotlin

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/4948983/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-ii/solutions/4948983/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort the banned data. Avoid using the "contains" property to check whether a number is in the banned list, as it may result in a Time Limit Exceeded (TLE) error.
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
    fun maxCount(banned: IntArray, n: Int, maxSum: Long): Int {
        var res = 0 

        var sum = 0L
        banned.sort()

        var j = 0 
        for( i in 1 .. n){
            while( j < banned.size && i > banned[j]) j++
            if( j < banned.size && i == banned[j]) continue 
            if( sum + i > maxSum) return res 
            res++ 
            sum += i

        }

        return res
    }
}
```