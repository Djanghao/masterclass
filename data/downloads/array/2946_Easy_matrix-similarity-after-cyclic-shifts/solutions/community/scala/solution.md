# [scala] - 1LoC, nested forall, indices

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4343464/](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/solutions/4343464/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
```
object Solution {
  def areSimilar(mat: Array[Array[Int]], k: Int): Boolean = 
    mat.forall(row => row.indices.forall(i => row(i) == row((i + k) % row.length)))
}
```