# Kotlin solution

**Author:** nothingelsematters
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4298657/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4298657/)

---

# Complexity

- Time complexity: $$O(n \\log(n))$$
- Space complexity: $$O(1)$$

# Code

```
class Solution {
    fun minPairSum(nums: IntArray): Int {
        nums.sort()
        return nums.asSequence()
            .take(nums.size / 2)
            .zip(nums.asList().asReversed().asSequence().take(nums.size / 2))
            .maxOf { (a, b) -> a + b }
    }
}
```