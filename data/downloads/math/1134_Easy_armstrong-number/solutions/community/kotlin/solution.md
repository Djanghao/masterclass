# O(1) space

**Author:** lazy-bird
**Votes:** 0
**Link:** [https://leetcode.com/problems/armstrong-number/solutions/4344361/](https://leetcode.com/problems/armstrong-number/solutions/4344361/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
class Solution {
    fun isArmstrong(n: Int): Boolean {
      val pw = Math.log10(n.toDouble()).toInt() + 1
      
      var c = n
      var sum = 0
      while(c != 0) {
        val digit = c % 10
        sum += (1..<pw).fold(digit) { acc, n -> acc * digit }
        c /= 10
      }
      
      return sum == n        
    }
}
```