# Efficient Scala solution

**Author:** tumakha
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/1304513/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/1304513/)

---

```scala
  def longestOnes(nums: Array[Int], k: Int): Int = {
    var allowedZeros = k
    var start = 0
    for (num <- nums) {
      if (num == 0) allowedZeros -= 1
      if (allowedZeros < 0) {
        if (nums(start) == 0) allowedZeros += 1
        start += 1
      }
    }
    nums.length - start
  }
```