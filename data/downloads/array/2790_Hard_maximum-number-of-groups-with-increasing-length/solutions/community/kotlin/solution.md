# Kotlin solution

**Author:** Z3ROsum
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3806840/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3806840/)

---

```Kotlin
class Solution {
    fun maxIncreasingGroups(usageLimits: List<Int>): Int {
        var limits = usageLimits.sorted()

        var sum = 0L
        var currGroups = 0
        for (i in limits) {
            sum += i
            var new = currGroups + 1
            if (sum >= new * (new + 1) / 2) {
                currGroups++
            }
        }
        return currGroups
    }
}
```