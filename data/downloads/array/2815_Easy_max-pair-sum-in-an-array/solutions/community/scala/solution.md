# [scala] - naive quadratic; group by max and sort; group by max and find two biggest

**Author:** nikiforo
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3914793/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3914793/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Code
Naive
```
  def maxSum(nums: Array[Int]): Int = {
    val maxs = nums.map(_.toString().max)
    val sums = nums.indices.flatMap { i =>
      (i + 1 until nums.length).filter(j => maxs(i) == maxs(j)).map(j => nums(i) + nums(j))
    }
    sums.maxOption.getOrElse(-1)
  }
```

group by max and sort
```

  def maxSum(nums: Array[Int]): Int =
    nums.groupBy(_.toString().max).foldLeft(-1) { case (max, (_, values)) =>
      if (values.length < 2) max
      else math.max(max, values.sorted.takeRight(2).sum)
    }
```

group by max and find two biggest
```
  def maxSum(nums: Array[Int]): Int =
    nums.groupBy(_.toString().max).foldLeft(-1) { case (max, (_, values)) =>
      if (values.length < 2) max
      else {
        val (max1, max2) =
          values.foldLeft((Int.MinValue, Int.MinValue)) { case (p @ (mm, m), v) =>
            if (v > mm) (v, mm)
            else if (v > m) (mm, v)
            else p
          }
        math.max(max, max1 + max2)
      }
    }
```