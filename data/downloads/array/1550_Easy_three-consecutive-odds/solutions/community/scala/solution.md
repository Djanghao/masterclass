# Scala FP: 1 boolean expression tailrec

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/three-consecutive-odds/solutions/5394919/](https://leetcode.com/problems/three-consecutive-odds/solutions/5394919/)

---

# Code
```
object Solution {
  @annotation.tailrec
  def threeConsecutiveOdds(arr: Array[Int], i: Int = 0, m1: Int = 0, m2: Int = 0): Boolean = 
    i < arr.length && (arr(i) % 2 == 1 && m1 % 2 == 1 && m2 % 2 == 1 || threeConsecutiveOdds(arr, i + 1, arr(i), m1))
}
```