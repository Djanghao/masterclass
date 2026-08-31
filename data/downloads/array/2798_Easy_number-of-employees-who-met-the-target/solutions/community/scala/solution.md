# [scala] - count

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3918617/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3918617/)

---

# Code
```
object Solution {
  def numberOfEmployeesWhoMetTarget(hours: Array[Int], target: Int): Int =
    hours.count(_ >= target)
}
```