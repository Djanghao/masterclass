# Effective Scala solution

**Author:** tumakha
**Votes:** 3
**Link:** [https://leetcode.com/problems/house-robber/solutions/846339/](https://leetcode.com/problems/house-robber/solutions/846339/)

---

```scala
/**
 * @author Yuriy Tumakha
 */
  def rob(nums: Array[Int]): Int = nums.foldLeft((0, 0)) {
      case ((prev, max), num) => (max, max max (prev + num))
    }._2
```