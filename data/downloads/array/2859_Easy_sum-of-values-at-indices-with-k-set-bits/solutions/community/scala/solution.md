# Traditional finding bits

**Author:** mohan_singitham
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4427300/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4427300/)

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
    def sumIndicesWithKSetBits(nums: List[Int], k: Int): Int = {
        nums.zipWithIndex.flatMap{case (x, index) => if(findBits(index) == k) Some(x) else None}.sum
    }

    def findBits(num: Int) = {
        var numOf1s = 0
        var tmp = num
        while(tmp != 0){
            val divisor = tmp / 2
            val remainder = tmp % 2
            if(remainder == 1) numOf1s = numOf1s + 1
            tmp = divisor
        }
       numOf1s 
    }
}
```