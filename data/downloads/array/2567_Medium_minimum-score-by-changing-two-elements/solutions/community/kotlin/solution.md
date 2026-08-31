# Greedy Kotlin Lambda O(N log N)

**Author:** kotlinc
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3203067/](https://leetcode.com/problems/minimum-score-by-changing-two-elements/solutions/3203067/)

---

Consider the sorted scenario, where the index of the nums is
```0 1 2 3 4 .... n-3, n-2, n-1```
We need to find the min value of
* `nums[n-1]` vs `nums[2]`
* `nums[n-2]` vs `nums[1]`
* `nums[n-3]` vs `nums[0]`
The commonality is `n-1-2 = n-3`, `n-2-1 = n-3` and `n-3-0 = n-3`. So we write the following lambda to find the `nums[n-3+it]` vs `nums[it]`

```kotlin
class Solution {
  fun minimizeSum(nums: IntArray): Int {
    nums.sort()
    return (0 until 3).map {
      nums[nums.size - 3 + it] - nums[it]
    }.minOrNull()!!
  }
}
```
