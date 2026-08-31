# readable FP Scala Solution

**Author:** bobojon2ov
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/1734730/](https://leetcode.com/problems/minimum-absolute-difference/solutions/1734730/)

---

```
def minimumAbsDifference(arr: Array[Int]): List[List[Int]] = {
    val sorted = arr.sorted
    val zipped = sorted.dropRight(1).zip(sorted.tail)
    val minDif = zipped.foldLeft(Int.MaxValue) { (acc, e) =>
      val dif = e._2 - e._1
      if (dif >= 0 && dif <= acc) e._2 - e._1
      else acc
    }
    zipped.foldLeft(List.empty[List[Int]]) { (acc, e) =>
      if (e._2 - e._1 == minDif) acc :+ List(e._1, e._2)
      else acc
    }
  }
```