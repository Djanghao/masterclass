# short scala solution

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/2719747/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/2719747/)

---

```scala
  def digArtifacts(n: Int, artifacts: Array[Array[Int]], dig: Array[Array[Int]]): Int = {
    val set = dig.map(d => d(0) -> d(1)).toSet
    artifacts.count{case Array(r1, c1, r2, c2) => 
      (r1 to r2).forall{r=> (c1 to c2).forall{c=>  set.contains((r,c)) }}}
  }
```