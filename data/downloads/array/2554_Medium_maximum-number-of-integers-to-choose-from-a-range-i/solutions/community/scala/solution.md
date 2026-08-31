# Scala tailrec

**Author:** maciejwadowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6120302/](https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/solutions/6120302/)

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
```scala []
object Solution {
    def maxCount(banned: Array[Int], n: Int, maxSum: Int): Int = {
        val bannedSet = banned.toSet
        
        @scala.annotation.tailrec
        def until(current: Int, acc: Int, numbers: Int): Int = 
            if (current > n) numbers
            else if (bannedSet contains current) until(current+1, acc, numbers)
            else if (current + acc > maxSum) numbers 
            else until(current+1, acc + current, numbers+1)

        until(1, 0, 0)
    }
}
```