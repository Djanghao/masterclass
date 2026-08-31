# scala dp

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524389/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/3524389/)

---

```
object Solution {
  def gcd(a: Int, b: Int):Int = if (b == 0) a else gcd(b, a % b)
  def maxScore(nums: Array[Int]): Int = {
    val dp = Array.fill(1<<(nums.size))(0)
    (((1<<(nums.size)) - 1) to 0 by -1).foreach{state =>
      lazy val numbersTaken = Integer.bitCount(state)
      lazy val pairsFormed = numbersTaken >> 1
      if ((numbersTaken & 1) == 0)
        (0 until nums.length).foreach{firstIndex => (firstIndex+1 until nums.length).foreach{secondIndex =>
          if (((state >> firstIndex) & 1) != 1 && ((state >> secondIndex) & 1) != 1)
            dp(state) = dp(state) max (((pairsFormed + 1) * gcd(nums(firstIndex), nums(secondIndex))) + (dp(state | (1 << firstIndex) | (1 << secondIndex))))
        }}
    }
    dp(0)
  }
}
```