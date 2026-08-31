# Scala solution

**Author:** danielOlivo
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/4588822/](https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/solutions/4588822/)

---

# Code
```
object Solution {
    def minimumRounds(tasks: Array[Int]): Int ={
        val counts = tasks.groupBy(identity).map(_._2.size)
        if(counts.exists(_ < 2)) -1
        else counts.map{s => (s + 2) / 3}.sum
    }
}
```