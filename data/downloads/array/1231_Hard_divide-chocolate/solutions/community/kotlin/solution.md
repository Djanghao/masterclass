# Binary Search

**Author:** usernamectrlc
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/4860880/](https://leetcode.com/problems/divide-chocolate/solutions/4860880/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
similar to probleom cut ribbons
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
    fun maximizeSweetness(sweetness: IntArray, k: Int): Int {
        var left = 1 
        var right = sweetness.sum()

        while( left + 1 < right){
            val mid = left + (right - left) / 2
            if( isValid(sweetness, k, mid)) left = mid 
            else right = mid 
        }

        return if( isValid(sweetness, k, right)) right else left
    }

    fun isValid(sweetness: IntArray, k: Int, s: Int): Boolean{
        var curr = 0
        var res = 0
        sweetness.forEach{
            curr+= it
            if( curr >= s){
                curr = 0 
                res++
            }

        }

        return res >= k + 1
    }
}
```