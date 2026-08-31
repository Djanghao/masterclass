# Scala. Single scan O(n)

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/4582989/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/4582989/)

---

# Intuition
Scan once, finding the first of possibly multiple equal mins from left and the first of possibly multiple equal maxes from right.

# Approach
1. Find the first min from left and the first max from right
2. Sum the distance of the min from the left and the distance of the max from right.
3. If they'll cross, one swap can be saved, otherwise it's just a sum

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
object Solution {
  def minimumSwaps(nums: Array[Int]): Int = {
    val n = nums.size
    val lastIndex = n - 1
    var min = nums.head
    var minPos = 0
    var max = nums.last
    var maxPos = lastIndex
    (1 until n).foreach { i =>
      if (nums(i) < min) {
        minPos = i
        min = nums(i)
      }
      if (nums(lastIndex - i) > max) {
        maxPos = lastIndex - i
        max = nums(lastIndex - i)
      }
    }
    lastIndex - maxPos + minPos + (if (minPos <= maxPos) 0 else -1)
  }
}
```