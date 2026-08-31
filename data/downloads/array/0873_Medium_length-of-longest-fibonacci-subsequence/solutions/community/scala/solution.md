# Scala - tabulation

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/5337121/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/5337121/)

---


```
object Solution {
    def lenLongestFibSubseq(arr: Array[Int]): Int = {
        val n = arr.length
        val index = arr.zipWithIndex.toMap // Map element to its index
        val dp = collection.mutable.Map[(Int, Int), Int]().withDefaultValue(2)
        var maxLen = 0

        for (j <- 1 until n) {
            for (i <- 0 until j) {
                val k = index.getOrElse(arr(j) - arr(i), -1)
                if (k >= 0 && k < i) {
                    dp((i, j)) = dp((k, i)) + 1
                    maxLen = maxLen max dp((i, j))
                }
            }
        }

        if (maxLen >= 3) maxLen else 0
    }
}

```