# [Scala] 2 functional solutions using foldLeft and scanLeft

**Author:** cosminci
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/1476150/](https://leetcode.com/problems/max-consecutive-ones/solutions/1476150/)

---

Single pass:
```
  def findMaxConsecutiveOnes(nums: Array[Int]): Int =
    nums.foldLeft(0, 0) {
      case ((maxCount, currCount), n) =>
        if (n == 1) (maxCount.max(currCount + 1), currCount + 1) else (maxCount, 0)
    }._1
```

Two pass:
```
  def findMaxConsecutiveOnes(nums: Array[Int]): Int =
    nums.scanLeft(0)((currCount, n) => if (n == 1) currCount + 1 else 0).max
```