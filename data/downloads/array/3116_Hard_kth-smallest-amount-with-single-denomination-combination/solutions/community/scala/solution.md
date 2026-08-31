# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5025821/](https://leetcode.com/problems/kth-smallest-amount-with-single-denomination-combination/solutions/5025821/)

---

```scala
  def findKthSmallest(coins: Array[Int], k: Int): Long = {
    val mx = coins.max

    @scala.annotation.tailrec
    def binarySearch(l: Long, r: Long): Long =
      if (l < r) {
        val mid = (l + r) >>> 1
        if (check(mid, coins, k)) binarySearch(l, mid)
        else binarySearch(mid + 1, r)
      } else l

    binarySearch(1L, mx.toLong * k)
  }

  private def check(m: Long, coins: Array[Int], k: Int): Boolean = {
    val cnt = (1 until (1 << coins.length)).foldLeft(0L)((acc, i) => {
      val product = coins.indices.foldLeft(1L)((prod, j) => {
        if (((i >> j) & 1) == 1) lcm(prod, coins(j))
        else prod
      })
      if (Integer.bitCount(i) % 2 == 1) acc + m / product
      else acc - m / product
    })
    cnt >= k
  }

  private def lcm(a: Long, b: Long): Long =
    a / gcd(a, b) * b

  @scala.annotation.tailrec
  private def gcd(a: Long, b: Long): Long =
    if (b == 0) a else gcd(b, a % b)
```