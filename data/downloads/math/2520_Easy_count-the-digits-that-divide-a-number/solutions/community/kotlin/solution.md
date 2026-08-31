# Simple solution in a while loop

**Author:** Andrey_Bukreev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5447124/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5447124/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
113 ms
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
32.96 MB
# Code
```
class Solution {
    fun countDigits(num: Int): Int {
        var n = num
        var count = 0
        while(n > 0){
            val digit = n % 10
            if(num % digit == 0){
                count++
            }
            n /= 10
        }
        return count
    }
}
```