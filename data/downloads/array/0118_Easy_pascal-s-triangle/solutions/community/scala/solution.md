# [Scala] LazyList solution

**Author:** MarkMarkyMarkus
**Votes:** 2
**Link:** [https://leetcode.com/problems/pascals-triangle/solutions/2559020/](https://leetcode.com/problems/pascals-triangle/solutions/2559020/)

---

```scala
    def generate(numRows: Int): List[List[Int]] = {
      LazyList.iterate(List(1)) {
        prevRow \u21D2 1 +: (if (prevRow.length == 1) List.empty else prevRow.sliding(2).map(_.sum).toList) :+ 1
      }.take(numRows).toList
    }
```