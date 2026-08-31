# Scala one line solution

**Author:** mar_kuzh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5771764/](https://leetcode.com/problems/minimum-bit-flips-to-convert-number/solutions/5771764/)

---

# Approach
Operator xor shows us number of bits to flip



# Code
```scala []
object Solution {
    def minBitFlips(start: Int, goal: Int): Int = (start ^ goal).toBinaryString.count(_ == '1')
}
```