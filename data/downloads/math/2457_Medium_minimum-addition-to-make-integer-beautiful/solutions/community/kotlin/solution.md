# Runtime : Beats 100.00% of users with Kotlin

**Author:** himanshurai5991
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5086819/](https://leetcode.com/problems/minimum-addition-to-make-integer-beautiful/solutions/5086819/)

---

# Intuition

eg for 437, target = 6 nearest number divided by 100 is 500 , so calculate

num = input integer
divided will start by 10 and goes as 100, 1000, 10000...
 sumOfDigits( num  + (divided - num % divided )) and if is lower than target than (divided - num % divided ) is answer



<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: log(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun makeIntegerBeautiful(n: Long, target: Int): Long {
        
        var start = 10L
        var curr = n
        var res = 0L
        
        var sum = getSumOfDigits(n)
        if(sum <= target){
            return 0
        }
        
        while(sum > target) {
            val rem = curr % start
            res = start - rem
            sum = getSumOfDigits(curr+res)
            //println(sum)
            start *= 10
        }
        return res
    }

    private fun getSumOfDigits(num : Long): Long {
        var res = 0L
        var curr = num
        while(curr != 0L ){
            val rem  = curr%10
            res +=  rem
            curr /= 10
        }
        return res
    }
}
```