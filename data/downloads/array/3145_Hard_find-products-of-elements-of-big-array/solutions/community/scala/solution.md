# scala

**Author:** Len_master
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5150335/](https://leetcode.com/problems/find-products-of-elements-of-big-array/solutions/5150335/)

---

```scala
object Solution {
  def findProductsOfElements(queries: Array[Array[Long]]): Array[Int] = {
    def calc(p: Int, lim: Long): Long = {
      val len = 1L << p
      val len2 = len * 2
      val ret = lim / len2 * len + (if (lim % len2 >= len) lim % len2 - len + 1 else 0)
      ret
    }

    def countOne(x: Long): Long = {
      def g(x: Long, p: Int): Long =
        if ((1L << p) > x) 0L
        else calc(p, x) + g(x, p + 1)

      g(x, 0)
    }

    def findPos(x: Long): (Long, Int) = {
      @scala.annotation.tailrec
      def binarySearch(head: Long, tail: Long): (Long, Int) =
        if (head >= tail) (head, (x - countOne(head - 1)).toInt)
        else {
          val mid = (head + tail) >> 1
          if (countOne(mid) >= x) binarySearch(head, mid)
          else binarySearch(mid + 1, tail)
        }

      binarySearch(1L, x)
    }

    def gao1(x: Long, L: Int, R: Int, M: Int): Long = {
      var ret = 1L
      var p = 0
      var i = 0
      while ((1L << p) <= x) {
        if ((x >> p & 1) == 1) {
          i += 1
          if (L <= i && i <= R) ret = (1L << p) % M * ret % M
        }
        p += 1
      }
      ret
    }

    def power(a: Long, b: Long, M: Int): Long = {
      @scala.annotation.tailrec
      def g(aa: Long, bb: Long, y: Long): Long =
        if (bb == 0) y
        else {
          val new_y = if ((bb & 1) == 1) y * aa % M else y
          val new_aa = aa * aa % M
          val new_bb = bb >> 1
          g(new_aa, new_bb, new_y)
        }

      g(a, b, 1L)
    }


    def gao2(L: Long, R: Long, M: Int): Long = {
      @scala.annotation.tailrec
      def g(p: Int, ret: Long): Long =
        if ((1L << p) > R) ret
        else {
          val cnt = calc(p, R) - calc(p, L - 1)
          val newRet = ret * power((1L << p) % M, cnt, M) % M
          g(p + 1, newRet)
        }

      g(0, 1L)
    }

    queries.map(qry => {
      val L = findPos(qry.head + 1)
      val R = findPos(qry(1) + 1)
      if (L._1 == R._1) gao1(L._1, L._2, R._2, qry(2).toInt).toInt
      else {
        val t = gao1(L._1, L._2, 1000000000, qry(2).toInt) * gao1(R._1, 1, R._2, qry(2).toInt) % qry(2)
        (t * gao2(L._1 + 1, R._1 - 1, qry(2).toInt) % qry(2)).toInt
      }
    })
  }
}
```