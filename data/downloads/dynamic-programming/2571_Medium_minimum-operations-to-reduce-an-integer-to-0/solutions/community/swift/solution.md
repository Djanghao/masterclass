# Swift

**Author:** achoas
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/4350993/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/4350993/)

---

# Intuition
The key is, we have to decide whether to add 1 or subtract 1 when 'n' is odd and not equal to 1. 

We have to check whether adding 1 or subtract 1 to the value will result in an even number when multiplied by 2 or not.

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
    func minOperations(_ n: Int) -> Int {
       var n = n
       var res = 0
       while n != 0 {
           if n % 2 == 0 {
               n /= 2
           } else {
               if n == 1 || ((n + 1) / 2) % 2 != 0  { 
                   n -= 1 
                } else {
                    n += 1
                }
               res += 1
           }
       }
       return res
    }
}
```