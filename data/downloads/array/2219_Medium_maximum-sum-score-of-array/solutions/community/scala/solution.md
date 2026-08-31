# Scala | Functional | BigDecimal | O(N) time, O(1) space

**Author:** vertuli
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/4449262/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/4449262/)

---

Rolled a custom `maxValue` function since `Math.max ` doesn't work with `BigDecimal`.

```scala
object Solution {
    def maximumSumScore(nums: Array[Int]): Long = {
        val initLeftSum = BigDecimal(0)
        val initRightSum = nums.foldLeft(BigDecimal(0))(_ + _)
        val initMax = BigDecimal(Long.MinValue)
        
        nums.foldLeft((initLeftSum, initRightSum, initMax)) {
            case ((leftSum, rightSum, prevMax), n) => (leftSum + n, rightSum - n, maxValue(leftSum + n, rightSum, prevMax))
        }._3.toLong
    }
    
    private def maxValue(a: BigDecimal, b: BigDecimal, c: BigDecimal): BigDecimal = {
        if (a >= b && a >= c) a else if (b >= c) b else c
    }
}
```