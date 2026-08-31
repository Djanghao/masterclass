# Simple 100% Memory + Time 1 Liner

**Author:** Kalz337
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/5220089/](https://leetcode.com/problems/valid-word-square/solutions/5220089/)

---



```
object Solution {
    def validWordSquare(w: List[String]): Boolean = 
        val n = w.size
        (0 until n).forall { i => (0 until w(i).size).forall: j =>
          j < n && i < w(j).size && w(i)(j) == w(j)(i) }
}

```