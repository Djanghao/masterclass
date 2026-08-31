# Scala solution, with 2 pointers, O(1) space complexity, beats 100% CPU and memory

**Author:** dLuxHu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/5478639/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/5478639/)

---

# Intuition
* Iterate through all of the elements, while keeping two pointers `prevPeak` and `nextPeak` updated which shows the previous and next "peak"-s (end of a sequence that is increasing or decreasing monotonously relatively to the actual index).
* Select elements only that are far enough from the peaks (the distance is at least `time`).

# Complexity
- Time complexity: $O(n)$
- Space complexity: $O(1)$

# Code
```
object Solution {
  def goodDaysToRobBank(security: Array[Int], time: Int): List[Int] = {
    if (time == 0) return security.indices.toList
    var prevPeak = 0
    var nextPeak = 0
    (1 until (security.length - time)).filter { i =>
      if (security(i - 1) < security(i)) prevPeak = i
      if (i > nextPeak) {
        nextPeak = i
        while (nextPeak < security.length - 1 && security(nextPeak + 1) >= security(nextPeak)) nextPeak += 1
      }
      ((i - prevPeak) >= time) && ((nextPeak - i) >= time)
    }.toList
  }
}
```