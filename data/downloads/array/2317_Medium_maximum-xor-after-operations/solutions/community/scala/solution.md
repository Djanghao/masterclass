# Scala | One Liner

**Author:** soumensaha
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/2196250/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/2196250/)

---

Although I am having difficulties to understand the problem :(

```
object Solution {
  def maximumXOR(nums: Array[Int]): Int = nums.reduce(_ | _)
}

//Runtime: 1313 ms, faster than 100.00% of Scala online submissions for Maximum XOR After Operations .
//Memory Usage: 92.7 MB, less than 100.00% of Scala online submissions for Maximum XOR After Operations .
```