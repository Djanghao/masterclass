# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/5959085/](https://leetcode.com/problems/max-chunks-to-make-sorted/solutions/5959085/)

---

```scala []
object Solution {
  def maxChunksToSorted(arr: Array[Int]): Int =
    arr.iterator.scanLeft(-1){case (b,a) => b max a}.drop(1)
      .zipWithIndex.count{case (a,b) => a==b}
}
```