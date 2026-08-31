# Scala solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/2764890/](https://leetcode.com/problems/largest-subarray-length-k/solutions/2764890/)

---

```
object Solution {
    def largestSubarray(nums: Array[Int], k: Int): Array[Int] = {
        val a = nums indexOf nums.slice(0, nums.length-k+1).max
        nums.slice(a, a+k)
    }
}
```