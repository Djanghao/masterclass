# Just brutal force DFS, using a String to hash the array during the search

**Author:** qiuqiushasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/1878077/](https://leetcode.com/problems/maximum-points-in-an-archery-competition/solutions/1878077/)

---

```scala

  def maximumBobPoints(na: Int, alic: Array[Int]): Array[Int] = {

    var max   = 0
    var shape = ""

    def f(idx: Int, remain: Int, score: Int, s: String): Unit = {

      if (idx == 0) {
        if (score >= max) {
          max = score
          shape = (if (remain > 0) remain else 0) + "#" + s
        }
        return
      }
      f(idx - 1, remain, score, "0#" + s)
      if (remain > alic(idx))
        f(idx - 1, remain - alic(idx) - 1, score + idx, (alic(idx) + 1) + "#" + s)
    }

    f(11, na, 0, "")

    shape.split("#").map(x => x.toInt)

  }
```