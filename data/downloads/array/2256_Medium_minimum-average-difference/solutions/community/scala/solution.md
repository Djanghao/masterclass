# scala

**Author:** nikiforo
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/1994632/](https://leetcode.com/problems/minimum-average-difference/solutions/1994632/)

---

```scala
def minimumAverageDifference(nums: Array[Int]): Int = {
  val list = nums.map(_.toLong).toList
  goMinAv(list, 0, 0, list.sum, nums.length, Int.MaxValue, 0)
}

def goMinAv(nums: List[Long], leftSum: Long, ind: Int, rightSum: Long, rightCount: Int, minimum: Long, minimumInd: Int): Int =
  nums match {
    case Nil => minimumInd
    case h :: tail =>
      val lSum = leftSum + h
      val rSum = rightSum - h
      val lCount = ind + 1
      val rCount = rightCount - 1

      val rAvg = if(rCount == 0) 0 else rSum / rCount
      val avDiff = math.abs(lSum / lCount - rAvg)
      val (min, minInd) = if(avDiff < minimum) (avDiff, ind) else (minimum, minimumInd)

      goMinAv(tail, lSum, lCount, rSum, rCount, min, minInd)
  }
  ```