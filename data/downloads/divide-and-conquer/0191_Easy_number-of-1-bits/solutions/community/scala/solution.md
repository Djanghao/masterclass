# ✅ Scala: one-liner (is this cheating?)

**Author:** aaabramov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/3467813/](https://leetcode.com/problems/number-of-1-bits/solutions/3467813/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {

  def hammingWeight(n: Int): Int =
    n.toBinaryString.count(_ == '1')

}
```