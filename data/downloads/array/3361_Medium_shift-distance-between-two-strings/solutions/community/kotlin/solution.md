# Kotlin

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075800/](https://leetcode.com/problems/shift-distance-between-two-strings/solutions/6075800/)

---

Spent too much to understand the problem: for each new jump the letter is `changed`

#### Code

```kotlin []

    fun shiftDistance(s: String, t: String, nextCost: IntArray, previousCost: IntArray) =
        s.withIndex().sumOf { (i, c) ->
            var next = 0L
            var x = c - 'a'
            while (x % 26 != t[i] - 'a') next += nextCost[x++ % 26]
            x = c - 'a' + 26
            var prev = 0L
            while (x % 26 != t[i] - 'a') prev += previousCost[x-- % 26]
            min(prev, next).toLong()
        }

```

Why my posts are disappear?