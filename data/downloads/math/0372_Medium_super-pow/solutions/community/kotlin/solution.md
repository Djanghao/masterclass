# Kotlin Fast Pow Solution

**Author:** kotlinc
**Votes:** 1
**Link:** [https://leetcode.com/problems/super-pow/solutions/3217120/](https://leetcode.com/problems/super-pow/solutions/3217120/)

---

# Intuition
$$a ^ {345}$$ can be calculated this way
1. Let $$ V = (a ^ {3}) ^ {10} * a ^ 4$$
2. $$ Result = (V ^ {10}) * a ^ 5$$

# Complexity
- Time complexity: $$O(8N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  
  val MOD = 1337L
  fun superPow(a: Int, b: IntArray): Int {
    fun fastPow(a: Long, b: Int): Long {
      var res = 1L
      var base = a
      var pow = b
      while (pow > 0) {
        if ((pow and 1) == 1)
          res = (res * base) % MOD
        pow = pow shr 1
        base = (base * base) % MOD
      }
      return res
    }

    var res = 1L
    for (v in b)
      res = (fastPow(res, 10) * fastPow(a.toLong(), v)) % MOD

    return res.toInt()
  }
}
```