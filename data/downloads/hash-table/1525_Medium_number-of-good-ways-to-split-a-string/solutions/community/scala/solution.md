# Storing only counts without substrings

**Author:** mohan_singitham
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/4819958/](https://leetcode.com/problems/number-of-good-ways-to-split-a-string/solutions/4819958/)

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
    def numSplits(s: String): Int = {
        var result = 0
        val rightArray = Array.fill(26)(0)
        val leftArray = Array.fill(26)(0)

        for(i <- s){
            rightArray(i-'a') += 1
        }


        for(left <-s){
            var leftDistinct = 0
            var rightDistinct = 0
            leftArray(left - 'a') += 1
            rightArray(left - 'a') -= 1
            
            for(i <- 0 until 26){
                if(leftArray(i) > 0)  leftDistinct += 1
                if(rightArray(i) > 0)  rightDistinct += 1
            }
            if(leftDistinct == rightDistinct)  result = result+1
        }
        result
    }
}
```