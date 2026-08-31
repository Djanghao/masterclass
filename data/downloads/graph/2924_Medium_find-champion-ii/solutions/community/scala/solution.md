# Scala / Easy Solution

**Author:** Tiberivs
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/6088902/](https://leetcode.com/problems/find-champion-ii/solutions/6088902/)

---

# Code
```scala []
object Solution {
    def findChampion(n: Int, edges: Array[Array[Int]]): Int = {
        val set = edges.foldLeft((0 until n).toSet) { (acc, x) =>
            val weak = x(1)
            acc - weak
        }

        if set.size == 1 then set.head
        else -1
    }
}
```