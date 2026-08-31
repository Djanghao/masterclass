# Scala - 100%

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/5323502/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/5323502/)

---

```
object Solution {
  def maximumSum(arr: Array[Int]): Int = {
    val n = arr.length
    val pre = new Array[Int](n) // maximum sum till index i 
    val suf = new Array[Int](n)

    pre(0) = arr(0)
    for (i <- 1 until n) {
      pre(i) =  if (pre(i - 1) > 0) 
                    pre(i - 1) + arr(i)
                else arr(i)
    }

    suf(n - 1) = arr(n - 1)
    for (i <- (n - 2) to 0 by -1) {
      suf(i) =  if (suf(i + 1) > 0) 
                    suf(i + 1) + arr(i) 
                else arr(i)
    }

    val ans = (1 until n - 1).foldLeft(arr.max)((acc, i) => {
        val notTake_i = pre(i - 1) + suf(i + 1)
        val take_i = pre(i) + suf(i + 1)
        acc max notTake_i max take_i
    })

    ans max suf.max max pre.max
  }
}

```