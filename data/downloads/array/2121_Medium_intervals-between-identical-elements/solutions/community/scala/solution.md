# Short functional programming style for Prefix sum

**Author:** qiuqiushasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/intervals-between-identical-elements/solutions/1805767/](https://leetcode.com/problems/intervals-between-identical-elements/solutions/1805767/)

---

```scala

  def getDistances(arr: Array[Int]): Array[Long] = {
    import scala.collection.mutable.{HashMap, ArrayBuffer}
    type int = Int
    type ab  = ArrayBuffer[l]
    type l   = Long
    val map = new HashMap[int, ab]
    val pos = new HashMap[int, int]
    arr.zipWithIndex.foreach {
      case (v, i) => {
        if (!map.contains(v)) map += (v -> new ab)
        map(v) += i.toLong
        pos.put(i, map(v).size - 1)
      }
    }

    map.foreach { case (_, tab) => (1 until tab.size).foreach(i => tab(i) += tab(i - 1)) }

    def f(vl: Long, idx: int, tab: ab): l = {
      val len = tab.length
      if (idx == 0) {
        tab(len - 1) - vl * len
      } else if (idx == len - 1) {
        vl * len - tab(len - 1)
      } else {
        vl * (idx + 1) - tab(idx) + (tab(len - 1) - tab(idx - 1)) - vl * (len - idx)
      }
    }

    (0 until arr.length).map(i => f(i.toLong, pos(i), map(arr(i)))).toArray

  }
```