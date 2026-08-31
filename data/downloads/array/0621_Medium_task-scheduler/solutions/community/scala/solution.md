# [scala] fp + hash_table + greedy

**Author:** leetcode08
**Votes:** 1
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4342787/](https://leetcode.com/problems/task-scheduler/solutions/4342787/)

---

# Complexity
- Time complexity: $$O(m)$$, where:
    - *m* - the total number of tasks;
- Space complexity: $$O(k)$$, where:
    - *k* - the number of unique tasks;

# Code
```scala
object Solution {
  def leastInterval(tasks: Array[Char], n: Int): Int = {
    val frequencies = tasks.groupBy(identity).values.map(_.size)
    val maxFreq = frequencies.max
    val maxFreqCount = frequencies.count(_ == maxFreq)
    val answer = (maxFreq - 1) * (n + 1) + maxFreqCount
    answer max tasks.size
  }
}
```