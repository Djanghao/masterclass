# Kotlin | one-liner

**Author:** SamoylenkoDmitry
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5786684/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5786684/)

---

https://www.youtube.com/watch?v=5jtRPTHIj9M

Join me on Telegram 

https://t.me/leetcode_daily_unstoppable

```kotlin []

    fun stableMountains(height: IntArray, threshold: Int): List<Int> =
        height.indices.filter {
            it > 0 && height[it - 1] > threshold
        }

```