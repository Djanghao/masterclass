# [Scala] Functional solution using scanLeft, scanRight & foldLeft

**Author:** cosminci
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1477264/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1477264/)

---

The `maxPrefix` could be computed within the `foldLeft`, which would mean `2*O(n)` instead of `3*O(n)`, but this is easier to understand imo.
```
  def sumOfBeauties(nums: Array[Int]): Int = {
    val maxPrefix = nums.scanLeft(0)(math.max).tail
    val minSuffix = nums.scanRight(Int.MaxValue)(math.min).dropRight(1)
	
    (1 until nums.length - 1).foldLeft(0) { case (beauty, idx) =>
      val newBeauty =
        if (maxPrefix(idx - 1) < nums(idx) && nums(idx) < minSuffix(idx + 1)) 2
        else if (nums(idx - 1) < nums(idx) && nums(idx) < nums(idx + 1)) 1
        else 0
      beauty + newBeauty
    }
  }
```