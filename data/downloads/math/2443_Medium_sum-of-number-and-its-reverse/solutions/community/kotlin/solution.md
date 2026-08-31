# Simple solution

**Author:** lokile
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4722210/](https://leetcode.com/problems/sum-of-number-and-its-reverse/solutions/4722210/)

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
    fun rev(n:Int):Int{
        var res = 0
        var av = n
        while(av>0){
            res = res*10+av%10
            av/=10
        }
        return res
    }
    fun sumOfNumberAndReverse(num: Int): Boolean {
        if(num==0){
            return true
        }
        for(i in (num-1 downTo num/2)){
            if(rev(i) == num-i){
                return true
            }
        }
        return false
    }
}
```