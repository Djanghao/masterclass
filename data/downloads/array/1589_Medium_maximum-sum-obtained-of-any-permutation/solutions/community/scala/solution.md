# scala - 100%

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5152610/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/5152610/)

---

```
object Solution {
  def maxSumRangeQuery(nums: Array[Int], requests: Array[Array[Int]]): Int = {
    val mod = 1000000007
    val n = nums.length
    val prefix = Array.fill(n)(0)

    // Update prefix array based on requests
    requests.foreach { case Array(a, b) =>
      prefix(a) += 1
      if (b + 1 < n) prefix(b + 1) -= 1
    }

    // Calculate prefix sum
    for (i <- 1 until n) {
      prefix(i) += prefix(i - 1)
    }

    val sortedNums = nums.sorted
    val sortedPrefix = prefix.sorted

    var maxSum = 0L 
    for (i <- nums.indices) {
      maxSum = (maxSum + sortedNums(i).toLong * sortedPrefix(i)) % mod
    }

    maxSum.toInt 
  }
}

```