# Kotlin readable slow and fast pointers O(NK) O(1)

**Author:** Unrelentingfox
**Votes:** 1
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/2056100/](https://leetcode.com/problems/circular-array-loop/solutions/2056100/)

---

```
class Solution {
    // time: O(NK) N = nums.size, k = loop size
    // space: O(1)
    fun circularArrayLoop(nums: IntArray): Boolean {
        for (i in 0 until nums.size - 1) {
            if (hasCycle(nums, i)) return true
        }
        return false
    }

    fun hasCycle(nums: IntArray, start: Int): Boolean {
        var slow = start
        var fast = next(nums, slow)
        while (slow != fast) {
            if (slow == -1 || fast == -1) return false
            slow = next(nums, slow)
            fast = next(nums, next(nums, fast))
        }
        return slow != -1
    }

    fun next(nums: IntArray, curr: Int): Int {
        return if (curr != -1) {
            var new = (curr + nums[curr]) % nums.size
            if (new < 0) new += nums.size
            if (new != curr && sameSign(nums[curr], nums[new])) new else -1
        } else -1
    }
    
    fun sameSign(a: Int, b: Int) = a >= 0 == b >= 0
}
```