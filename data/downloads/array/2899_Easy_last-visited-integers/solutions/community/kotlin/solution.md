# Kotlin O(n) solution

**Author:** Kuba111
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-visited-integers/solutions/5747459/](https://leetcode.com/problems/last-visited-integers/solutions/5747459/)

---


# Code
```kotlin []
class Solution {
  fun lastVisitedIntegers(nums: IntArray): List<Int> {
        var seen = LinkedList<Int>()
        var ans = ArrayList<Int>()
        var last = 0;
        for (i in nums.indices) {
            var current = nums[i]
            if (last > 0 && current > 0) {
                last = 0;
            } else if (current.equals(-1)) {
                last++
                if (last > seen.size) {
                    ans.add(-1)
                } else {
                    ans.add(seen.get(last-1))
                }
            }
            if (current > 0) seen.addFirst(current)
        }
        return ans;
    }
}
```