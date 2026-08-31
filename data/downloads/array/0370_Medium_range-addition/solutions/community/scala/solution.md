# Scala 6 liner!

**Author:** pathikritbhowmick
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition/solutions/5260540/](https://leetcode.com/problems/range-addition/solutions/5260540/)

---

# Code
```
object Solution {
    def getModifiedArray(length: Int, updates: Array[Array[Int]]): Array[Int] = {
        val answer = Array.ofDim[Int](length + 1)
        for (Array(start, end, delta) <- updates) {
            answer(start) += delta
            answer(end+1) -= delta
        }
        answer.scanLeft(0)(_ + _).slice(1, length+1)
    }
}
```