# Scala FP: 1 pass foldLeft

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5446520/](https://leetcode.com/problems/average-waiting-time/solutions/5446520/)

---

# Code
```
object Solution {
  def averageWaitingTime(customers: Array[Array[Int]]): Double =
    customers.foldLeft((0L, 0)) {
      case ((load, time), Array(arrival, prepare)) => 
        (load + 0.max(time - arrival) + prepare, time.max(arrival) + prepare)
    }._1 / customers.length.toDouble
}
```