# Python / Kotlin / JavaScript - Just math

**Author:** ektegjetost
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5068428/](https://leetcode.com/problems/maximum-number-that-makes-result-of-bitwise-and-zero/solutions/5068428/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If we look at the binary representation for a number
```10100110111```
Take the highest bit
```10000000000```
Anything above this will include the highest bit, so ```x``` can't be >= whatever the highest bit is

Meanwhile, the very first number below this
```01111111111``` will already ```&``` to 0 with the highest bit

So just return 2 ^ highest bit - 1
  

# Approach
<!-- Describe your approach to solving the problem. -->
- just do it

# Complexity
- Time complexity: Usually $$O(1)$$, maybe depends on the language
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
``` python []
import math
class Solution:
    def maxNumber(self, n: int) -> int:
        return 2 ** int(math.log2(n)) - 1
```
``` kotlin []
class Solution {
    fun maxNumber(n: Long): Long {
        return (1L shl log2(n.toDouble()).toInt()) - 1L
    }
}
```
``` javascript []
var maxNumber = function(n) {
    return 2 ** Math.floor(Math.log2(n)) - 1;
};
```