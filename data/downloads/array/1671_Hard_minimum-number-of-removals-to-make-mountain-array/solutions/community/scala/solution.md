# Scala DP, find possible peaks and minimum deletions per side

**Author:** VPuuska
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5986890/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5986890/)

---

# Intuition & Approach

Using DP, we will find the following for every index `ind`:
- Minimum number of elements to delete from the left to make the remaining array on the left strictly increasing. These are stored in the array `left`.
- Minimum number of elements to delete from the right to make the remaining array on the right strictly decreasing. These are stored in the array `right`.

In addition to these numbers, we will also check whether there exists a strictly smaller number on the left and right of `ind`.

Then, for all indexes `ind` that have a smaller number to the left and to the right, `left(ind) + right(ind)` will be the minimum number of elements to remove to make the remaining array a mountain with `ind` as the peak.

Finally, just take the minimum of these values to get the answer.

# Complexity
- Time complexity: $$O(n^2)$$

- Space complexity: $$O(n)$$

# Code
```scala []
object Solution {
  def minimumMountainRemovals(nums: Array[Int]): Int = {
    val legalLeft = Array.fill[Boolean](nums.length)(false)
    val left = Array.fill[Int](nums.length)(nums.length)

    val legalRight = Array.fill[Boolean](nums.length)(false)
    val right = Array.fill[Int](nums.length)(nums.length)

    var currMin = 2000000000
    for ind <- 0 until left.length do
      left(ind) = ind
      val num = nums(ind)
      if num > currMin then legalLeft(ind) = true
      currMin = currMin min num
      for j <- 1 to ind do
        if nums(ind - j) < num then
          left(ind) = left(ind) min (j - 1 + left(ind - j))

    currMin = 2000000000
    for ind <- right.length - 1 to 0 by -1 do
      right(ind) = right.length - 1 - ind
      val num = nums(ind)
      if num > currMin then legalRight(ind) = true
      currMin = currMin min num
      for j <- 1 until right.length - ind do
        if nums(ind + j) < num then
          right(ind) = right(ind) min (j - 1 + right(ind + j))

    (0 until nums.length)
      .filter(ind => legalLeft(ind) && legalRight(ind))
      .map(ind => left(ind) + right(ind))
      .min
  }
}

```