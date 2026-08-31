# kotlin - one liner with O(N) time, O(1) space

**Author:** tucux
**Votes:** 7
**Link:** [https://leetcode.com/problems/missing-number/solutions/1013913/](https://leetcode.com/problems/missing-number/solutions/1013913/)

---

```
class Solution {
    fun missingNumber(nums: IntArray) =
        nums.size * (nums.size + 1) / 2 - nums.sum() 
}
```