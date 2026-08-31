# [Scala] 2 functional solutions using foldLeft & foldRight

**Author:** cosminci
**Votes:** 1
**Link:** [https://leetcode.com/problems/h-index/solutions/1473033/](https://leetcode.com/problems/h-index/solutions/1473033/)

---

O(nlogn) time O(1) space:
```
  def hIndex(citations: Array[Int]): Int =
    citations.sorted.foldRight(0) {
      case (numCitations, hIdx) =>
        if (numCitations < hIdx) return hIdx
        math.min(hIdx + 1, numCitations)
    }
```

O(n) time O(n) space:
```
def hIndex(citations: Array[Int]): Int = {
    val n = citations.length
    citations.foldLeft(Seq.fill(n + 1)(0)) {
      case (counts, numCitations) =>
        if (numCitations > n)
          counts.updated(n, counts(n) + 1)
        else
          counts.updated(numCitations, counts(numCitations) + 1)
    }.zipWithIndex.foldRight(0) {
      case ((count, hIdx), total) =>
        if (total + count >= hIdx) return hIdx
        total + count
    }
  }
```