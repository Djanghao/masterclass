# scala twoliner

**Author:** vititov
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021187/](https://leetcode.com/problems/maximum-xor-for-each-query/solutions/6021187/)

---

```scala []
object Solution {
  def getMaximumXor(nums: Array[Int], maximumBit: Int): Array[Int] = {
    lazy val mask = (1<<maximumBit)-1
    nums.scanLeft(0){case (b,a) => b^a}.drop(1).map(_ ^ mask).reverse
  }
}
```