# Kotlin Solution

**Author:** cerror
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/2068178/](https://leetcode.com/problems/count-positions-on-street-with-required-brightness/solutions/2068178/)

---

```kotlin
fun meetRequirement(n: Int, lights: Array<IntArray>, requirement: IntArray): Int {
        val lightChanges = IntArray(n + 1) { 0 }
        for (l in lights) {
            lightChanges[max(0, l[0] - l[1])] += 1
            // Make the last index exclusive
            lightChanges[min(n, l[0] + l[1] + 1)] -= 1
        }
        return lightChanges.runningFold(0) { a, b -> a + b }
            .drop(1).dropLast(1) // drop the first initial value (0), drop the last (index n) guard value
            .mapIndexed { idx, light -> light >= requirement[idx] }
            .count { it }
    }
```