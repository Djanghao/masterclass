# Scala solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/2757932/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/2757932/)

---

```
object Solution {
    def isConsecutive(nums: Array[Int]): Boolean = {
        nums.distinct.length == nums.length &&
        nums.max - nums.min == nums.length - 1
    }
}
```