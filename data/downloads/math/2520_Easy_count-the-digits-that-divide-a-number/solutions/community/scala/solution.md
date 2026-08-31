# Easy Scala Most Optimal Solution Havig 100   %    Time Optimised .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5325737/](https://leetcode.com/problems/count-the-digits-that-divide-a-number/solutions/5325737/)

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
object Solution {
    def countDigits(num: Int): Int = {
        var temp   =   num
        var cnt=0
        while   (temp   !=   0)
        {
            if   (num   %   (temp%10)  ==   0)   cnt +=1
            temp   =   temp/10
        }
        return cnt
    }
}
```