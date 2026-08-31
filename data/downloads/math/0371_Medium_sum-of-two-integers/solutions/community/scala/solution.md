# Easy bitwise XOR and AND  left shift Technique

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-two-integers/solutions/5060207/](https://leetcode.com/problems/sum-of-two-integers/solutions/5060207/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
Due to recursive call the time complexity becomes O ( log max(a,b )) which is equal t O ( log a ) which means O( log n ) . 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def getSum(a: Int, b: Int): Int = {
        if   (a==0) b else if   (b==0)   a   else   getSum(a^b,(a&b)<<1)
    }
}
```