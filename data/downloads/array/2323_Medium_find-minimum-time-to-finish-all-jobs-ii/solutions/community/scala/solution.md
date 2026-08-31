# Scala one-line solution

**Author:** hongjian3
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/4678681/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/4678681/)

---

# Intuition
Greedy match longest job with the most efficient worker.

# Code
```
object Solution {
    def minimumTime(jobs: Array[Int], workers: Array[Int]): Int = {
        jobs.sorted.zip(workers.sorted).map{ case(j, w) => math.ceil(j.toDouble / w).toInt }.max
    }
}
```