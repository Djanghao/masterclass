# [scala] - Bruteforce

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2524803/](https://leetcode.com/problems/maximum-rows-covered-by-columns/solutions/2524803/)

---

```scala
def maximumRows(mat: Array[Array[Int]], cols: Int): Int = {
  val len = mat(0).length
  val indices = mat(0).indices
  def go(chosen: List[Int], size: Int): Int = {
    if(size < cols) {
      val start = chosen.headOption.getOrElse(-1)
      (start + 1).until(len).map(i => go(i :: chosen, size + 1)).maxOption.getOrElse(0)
    } else {
      val inds = indices.filter(i => !chosen.contains(i)).toArray
      mat.count(arr => inds.forall(i => arr(i) == 0))
    }
  }
  go(List.empty, 0)
}
```