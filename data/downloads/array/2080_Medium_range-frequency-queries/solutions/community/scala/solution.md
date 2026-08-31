# Scala Segment Tree approach

**Author:** stan256
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-frequency-queries/solutions/5657392/](https://leetcode.com/problems/range-frequency-queries/solutions/5657392/)

---

# Complexity
- Time complexity:
O(logN)

- Space complexity:
O(n^2)

# Code
```
class RangeFreqQuery(arr: Array[Int]) {
    val tree = build()

    def build(): Array[Map[Int, Int]] = {
      val tree: Array[Map[Int, Int]] = Array.ofDim(4 * arr.length)

      def fill(left: Int, right: Int, index: Int): Unit = {
        if (left == right) tree(index) = Map(arr(left) -> 1)
        else {
          val middle = left + (right - left)/2
          fill(left, middle, index * 2 + 1)
          fill(middle + 1, right, index * 2 + 2)
          val s1 = tree(index * 2 + 1).toSeq
          val s2 = tree(index * 2 + 2).toSeq
          tree(index) = (s1 ++ s2).foldLeft(Map.empty[Int, Int]) {
            (map, pair) =>
              if (map.contains(pair._1)) map + (pair._1 -> (map(pair._1) + pair._2))
              else map + pair
          }
        }
      }
      fill(0, arr.length - 1, 0)
      tree
    }

    private def subQuery(qLeft: Int, qRight: Int, left: Int, right: Int, index: Int, value: Int): Int = {
      if (qLeft > right || qRight < left) return 0
      if (qLeft <= left && qRight >= right) return tree(index).getOrElse(value, 0)
      val middle = left + (right - left)/2
      subQuery(qLeft, qRight, left, middle, index * 2 + 1, value) +
        subQuery(qLeft, qRight, middle + 1, right, index * 2 + 2, value)
    }

    def query(left: Int, right: Int, value: Int): Int = {
      subQuery(left, right, 0, arr.length - 1, 0, value)
    }

  }
```