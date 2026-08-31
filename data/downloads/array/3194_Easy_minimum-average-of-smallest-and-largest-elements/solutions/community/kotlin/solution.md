# Kotlin simple solution

**Author:** qveex
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5899642/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5899642/)

---


# Solution 1
```kotlin []
fun minimumAverage(nums: IntArray): Double = with(nums.sorted()) {
    DoubleArray(count() / 2) {
        (get(it) + get(lastIndex - it)) / 2.0
    }.min()
}
```
---

# Solution 2
```kotlin []
fun minimumAverage(nums: IntArray): Double {
    nums.sort()
    var min = Double.MAX_VALUE
    repeat(nums.count() / 2) {
        val avg = (nums[it] + nums[nums.lastIndex - it]) / 2.0
        min = min(min, avg)
    }
    return min
}
```